const express = require('express')
const Ticket = require('../models/ticketsModel')
const User = require('../models/userModel')

const seedRouter = express.Router()

seedRouter.get('/', async (req, res)=>{
    const createTickets = await Ticket.find();
    const createUsers = await User.find();
    res.json({createTickets, createUsers})
})



module.exports = seedRouter;