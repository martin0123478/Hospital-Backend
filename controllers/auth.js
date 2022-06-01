const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { verify } = require('../helpers/google-verify');

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


const googleSignIn =async (req,res) =>{
  const googleToken = req.body.token

  try {
    const {name,email,picture} = await verify(googleToken)

    const usuarioDB = await Usuario.findOne({email});
    let usuario
    if(!usuarioDB){
      usuario = new Usuario({
        nombre:name,
        email,
        password:'@@',
        img:picture,
        google:true,
        
      })
    }else{
      //existe
      usuario = usuarioDB;
      usuario.google = true;
      usuario.password = '@@'
    }
    //guardar
    await usuario.save()
    //generar token -JWT
   const token =await  generarJWT(usuario.id)
    res.json({
      ok:true,
      token
    })
  } catch (error) {
    res.status(401).json({
      ok:false,
      msg:'token no valido'
    })
  }

}


const renewToken =async (req,res) =>{
  const uid = req.uid
  const usuario = await Usuario.findById(uid)
   //generar token -JWT
   const token =await  generarJWT(uid)
  res.json({
    ok:true,
    medico:usuario,
    token
  })
}
  
  

module.exports = {
  login,
  googleSignIn,
  renewToken
}