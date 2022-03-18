const {response} = require('express')

const Usuario = require('../models/usuario')
const getUsuarios = async(req,res) =>{
  const usuarios =await Usuario.find({}, 'nombre email role google')
  
  res.json({
    ok:true,
    usuarios
  })
}

const crearUsuario = async (req,res) =>{
  const {email,password,nombre} = req.body;
  
  try {
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
      return res.status(400).json({
        ok:false,
        msg:'el correo ya existe'
      })
    }
    const usuario = new Usuario(req.body);
  await usuario.save();
  res.json({
    ok:true,
    usuario
  })
  } catch (error) {
    
    res.status(500).json({
      ok:false,
      msg:'Error inesperado'
    })
  }
  

  
}

module.exports = {
  getUsuarios,
  crearUsuario
}