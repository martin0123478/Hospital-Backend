const express = require('express');
const {dbConection} = require('./database/config')
//crear el servidor de expres
const app = express();

//Base de Datos
dbConection();
//HTptP48IUd8cQAHU
//mean_user
//rutas
app.get('/', (req,res) =>{
  res.json({
    ok:true,
    msg:'Hola mundo'
  })
});
app.listen(3000, () =>{
  console.log('Servidos corriendo en puerto ' + 3000)
})