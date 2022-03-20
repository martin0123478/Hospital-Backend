const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

const login = async(req,res) => {
  const {email,password}  = req.body;
  try {
    //verificar email
    const usuarioBD = await Usuario.findOne({email})
    if(!usuarioBD){
      return res.status(404).json({
        ok:false,
        msg:'email no encontrado'
      })
    }
    //verificar contraseña
    const validPassword = bcrypt.compareSync(password,usuarioBD.password);
    if(!validPassword){
      return res.status(400).json({
        ok:false,
        msg:'contraseña no valida'
      })
    }

    //generar token -JWT
    res.json({
      ok:true,
      msg:'Hola Mundo'
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok:false,
      msg:'Hable con el administrador'
    })
  }
}

module.exports = {
  login
}