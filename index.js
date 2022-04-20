const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConection} = require('./database/config')
//crear el servidor de expres
const app = express();

//configurar cors
app.use(cors());
//lectura y parseo del body
app.use(express.json());
//Base de Datos
dbConection();


//rutas
app.use('/api/usuarios',require('./routes/usuarios'))
app.use('/api/hospitales',require('./routes/hospitales'))
app.use('/api/medicos',require('./routes/medicos'))
app.use('/api/login',require('./routes/auth'))
app.use('/api/todo',require('./routes/busquedas'))
app.use('/api/upload',require('./routes/uploads'))

app.listen(process.env.PORT, () =>{
  console.log('Servidos corriendo en puerto ' + process.env.PORT)
})