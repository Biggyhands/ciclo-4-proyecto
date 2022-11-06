const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const ticketsRoutes = require('./routes/ticketsRoutes')

const app = express()
const port = process.env.PORT || 9000 || 6666

//routes
app.get("/", (req, res)=>{
    res.send('Hola')
})

//middlewares
app.use(express.json())
app.use('/api', ticketsRoutes)


//mondogb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch((error)=>console.error(error))

app.listen(port, ()=> console.log('Server started on port', port))








