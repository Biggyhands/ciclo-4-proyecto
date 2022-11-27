const express = require('express')
const cors = require('cors');
const app = express();
const seedRouter = require('./routes/seedRoutes');
const ticketsRoutes = require('./routes/ticketsRoutes')
const userRouter = require('./routes/usersRoutes');

//  Middlewares
app.use(cors());
app.use(express.json());


//  Routes
// app.get("/", (req, res)=>{
//     res.send("Raiz del proyecto - Buscar alguna otras ruta")
// })
app.use('/api', seedRouter);
app.use('/api/tickets', ticketsRoutes)
app.use('/api/users', userRouter);

//  Configuraciones
app.set('port', process.env.PORT || 4500);

module.exports = app