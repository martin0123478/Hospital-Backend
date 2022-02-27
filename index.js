const express = require('express');
require('dotenv').config();
const {dbConection} = require('./database/config')
//crear el servidor de expres
const app = express();

//Base de Datos
dbConection();


//rutas
app.get('/', (req,res) =>{
  res.json({
    ok:true,
    msg:'Hola mundo'
  })
});
app.listen(process.env.PORT, () =>{
  console.log('Servidos corriendo en puerto ' + process.env.PORT)
})