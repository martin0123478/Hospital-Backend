const jwt = require('jsonwebtoken')
const validarJWT = (req,res,next) =>{
  //leer token
  const token = req.header('x-token');
  if(!token){
    return res.status(401).json({
      of:false,
      msg:'no hay token en la petición'
    })
  }

  try {
    const {uid} = jwt.verify(token,process.env.JWT_SECRET);
    console.log(uid);
    
  } catch (error) {
    return res.status(401).json({
      ok:false,
      msg:'Token no valido'
    })
  }
  next();

}


module.exports = {
  validarJWT
}