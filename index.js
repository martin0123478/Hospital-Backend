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
app.use('/api/login',require('./routes/auth'))

app.listen(process.env.PORT, () =>{
  console.log('Servidos corriendo en puerto ' + process.env.PORT)
})