
const getHospitales = (req,res ) =>{
  res.json({
    ok:true,
    msg:'get Hospitales'
  })
}

const crearHospital = (req,res ) =>{
  res.json({
    ok:true,
    msg:'crerar hospital'
  })
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