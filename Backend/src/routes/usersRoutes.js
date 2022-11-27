const express = require("express");
const User = require("../models/userModel");
const expressAsyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils')

const userRouter = express.Router();

userRouter.get("/", expressAsyncHandler(async (req, res) => {
    const users = await User.find();
    res.send(users);
}));

userRouter.get("/:id", expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(user){
        res.send(user);
    }else{
        res.status(404).send('User not found')
    }   
    
}));

userRouter.post('/signup', expressAsyncHandler(async(req, res) =>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })
    const user = await newUser.save()
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
    })
}))

userRouter.post('/signin', expressAsyncHandler(async(req, res) =>{
    const user = await User.findOne({ email: req.body.email })
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
            return 
        }else{
            res.status(404).send({ message: "Contraseña incorrecta"})
        }
    }else{
        res.status(404).send({ message: "Email incorrecto"})
    }
}))




module.exports = userRouter