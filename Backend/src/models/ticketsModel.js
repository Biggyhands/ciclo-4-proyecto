const mongoose = require('mongoose')

const ticketsSchema = mongoose.Schema({
    name:{
        type: String,
        requiered: true,
    },
    email:{
        type: String,
        requiered: true
    },
    issue:{
        type: String,
        requiered: true
    },
    description:{
        type: String,
        requiered: true
    },
    code:{
        type: String,
        requiered: true
    },
    support:{
        type: String,
        requiered: true
    },
    answer:{
        type: String,
        requiered: true
    }
})


module.exports = mongoose.model('Tickets', ticketsSchema)
