const express = require('express')
const ticketsSchema = require('../models/ticketsModel')

const router = express.Router()

//Create tickets
router.post("/tickets/create", (req, res)=>{
    const ticket = ticketsSchema(req.body)
    ticket
    .save()
    .then((data)=>res.json(data), console.log('Ticket creado'))
    .catch((error)=>res.json({message: error}))
})

//Obtener tickets
router.get("/tickets", (req, res)=>{
    ticketsSchema
    .find()
    .then((data)=>res.json(data), console.log('Listado de tickets'))
    .catch((error)=>res.json({message: error}))
})

//Obtener tickt por ID
router.get("/tickets/:id", (req, res)=>{
    const { id } = req.params
    ticketsSchema
    .findById(id)
    .then((data)=>res.json(data), console.log('Ticket por ID'))
    .catch((error)=>res.json({message: error}))
})

//Actualizar ticket
router.put("/tickets/update/:id", (req, res)=>{
    const { id } = req.params
    const {nombre, apellido, tipoProblema, descripcion} = req.body
    ticketsSchema
    .updateOne({_id: id}, { $set:{nombre, apellido, tipoProblema, descripcion}})
    .then((data)=>res.json(data), console.log('Ticket actualizado'))
    .catch((error)=>res.json({message: error}))
})

//Eliminar usuario
router.delete("/tickets/delete/:id", (req, res)=>{
    const { id } = req.params
    ticketsSchema
    .deleteOne({_id: id})
    .then((data)=>res.json(data), console.log('Se ha ejecutado la peticion correctamente'))
    .catch((error)=>res.json({message: error}))
})



module.exports = router


