const express = require('express');
//crear el servidor de expres
const app = express();


app.listen(3000, () =>{
  console.log('Servidos corriendo en puerto ' + 3000)
})