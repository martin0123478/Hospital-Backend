const Hospital = require('../models/hospital')

const getHospitales = async(req,res ) =>{
  const hospitales = await Hospital.find()
                                    .populate('usuario','nombre')
  res.json({
    ok:true,
    hospitales
  })
}

const crearHospital = async(req,res ) =>{
  const uid = req.uid;
  const hospital = new Hospital(
    {
      usuario:uid,
      ...req.body
    })
  try {
  const hospitalBD =   await hospital.save()
    res.json({
      ok:true,
      hospital:hospitalBD
    })
  } catch (error) {
    
  console.log(error)
  res.status(500).json({
    ok:false,
    msg:'Hable con el administrador'
  })
  }
}
const actualizarHospital = (req,res ) =>{
  res.json({
    ok:true,
    msg:'actualizar hospital'
  })
}

const borarHospital = (req,res ) =>{
  res.json({
    ok:true,
    msg:'borrar hospital'
  })
}

module.exports = {
  getHospitales,
  crearHospital,
  actualizarHospital,
  borarHospital
}