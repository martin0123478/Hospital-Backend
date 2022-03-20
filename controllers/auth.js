const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

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
   const token =await  generarJWT(usuarioBD.id)

    res.json({
      ok:true,
     token
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