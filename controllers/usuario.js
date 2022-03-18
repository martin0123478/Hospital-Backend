const {response} = require('express')

const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
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

    //encriptar contraseña

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,salt)
    //guardar usuario
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

const actualizarUsuario = async (req,res=response) =>{
  try {
    
    const uid = req.params.id
    const usuarioDB = await Usuario.findById(uid);
    if(!usuarioDB){
      return res.status(404).json({
        ok:false,
        msg:'Ese usuario no existe'
      })
    }
    //Actualizaciones
    const  campos = req.body;
    if(usuarioDB.email === req.body.email){
      delete campos.email
    }else{
      const existeEmail = await Usuario.findOne({email:req.body.email});
      if(existeEmail){
        return res.status(400).json({
          ok:false,
          msg:'Ya existe es usuario con ese email'
        })
      }
    }



    delete campos.password;
    delete campos.google;

    const usuarioActualizado = await Usuario.findByIdAndUpdate(uid,campos,{new:true});
    res.json({
      ok:true,
      usuario:usuarioActualizado
    })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok:false,
      msg:'error inesperado'
    })
  }
}
module.exports = {
  getUsuarios,
  crearUsuario,
  actualizarUsuario
}