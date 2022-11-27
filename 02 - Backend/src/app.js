const express = require('express')
const mongoose = require('mongoose')
const ticketsRoutes = require('./routes/ticketsRoutes')

const app = express()
const port = process.env.PORT || 9000 || 6666

//routes
app.get("/", (req, res)=>{
    res.send("Raiz del proyecto\nBusque alguna de las siguientes rutas:\n\n- Crear ticket\nhttp://localhost:9000/api/tickets/create\n\n- Obtener listado de tickets\nhttp://localhost:9000/api/tickets\n\n- Obtener listado de tickets por ID\nhttp://localhost:9000/api/tickets/{id}\n\n- Actualizar ticket por ID\nhttp://localhost:9000/api/tickets/update/{id}\n\n- Eliminar ticket por ID\nhttp://localhost:9000/api/tickets/delete/{id}")
})

//middlewares
app.use(express.json())
app.use('/api', ticketsRoutes)


//mondogb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch((error)=>console.error(error))

app.listen(port, ()=> console.log('Server started on port', port))