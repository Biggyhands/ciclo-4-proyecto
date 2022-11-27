const mongoose = require('mongoose')

const ticketsSchema = mongoose.Schema({
    nombre:{
        type: String,
        requiered: true,
    },
    apellido:{
        type: String,
        requiered: true
    },
    tipoProblema:{
        type: String,
        requiered: true
    },
    descripcion:{
        type: String,
        requiered: true
    }
})


module.exports = mongoose.model('Tickets', ticketsSchema)
