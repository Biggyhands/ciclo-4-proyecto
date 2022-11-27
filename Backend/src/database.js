const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/db_test';
console.log(process.env.MONGODB_URI)

mongoose.connect(URI)

const connection = mongoose.connection

connection.once('open',()=>{console.log("Conexion Exitosa!")})

module.exports = connection