const express = require('express');
//crear el servidor de expres
const app = express();

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