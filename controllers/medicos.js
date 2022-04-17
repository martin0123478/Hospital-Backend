const Medico = require('../models/medico')
const crearMedicos = async (req,res ) =>{
  const uid = req.uid;
  const hosp = req.hospital;
  const medico = new Medico(
    {
      usuario:uid,
      ...req.body
    })
  try {
  const medicoBD =   await medico.save()
    res.json({
      ok:true,
      hospital:medicoBD
    })
  } catch (error) {
    
  console.log(error)
  res.status(500).json({
    ok:false,
    msg:'Hable con el administrador'
  })
  }
}

const getMedicos = async(req,res ) =>{
  
    res.json({
      ok:true,
      msg:'obtener medico'
    })
  
  
  }
 

const actualizarMedicos= (req,res ) =>{
  res.json({
    ok:true,
    msg:'actualizar medico'
  })
}

const borarMedicos = (req,res ) =>{
  res.json({
    ok:true,
    msg:'borrar medico'
  })
}

module.exports = {
  getMedicos,
  crearMedicos,
  actualizarMedicos,
  borarMedicos
}