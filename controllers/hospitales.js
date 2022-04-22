const { findById } = require('../models/hospital')
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
const actualizarHospital =async (req,res ) =>{
  const id = req.params.id
  const uid = req.uid
try {
  const hospital= await Hospital.findById(id);
  if(!hospital){
    res.status(404).json({
      ok:false,
      msg:'hospital no encontrado'
    })
  }
  const cambioHospital = {
    ...req.body,
    usuario:uid
  }
  hospital.nombre = req.body.nombre
  const hospitalActualizado = await Hospital.findByIdAndUpdate(id, cambioHospital,{new:true})

  res.json({
    ok:true,
    hospital:hospitalActualizado
  })
  
} catch (error) {

  console.log(error)
  res.status(500).json({
    ok:false,
    msg:'hable con el administrador'
  })
  
}


  
}

const borarHospital = async(req,res ) =>{
  const id = req.params.id
  
try {
  const hospital= await Hospital.findById(id);
  if(!hospital){
    res.status(404).json({
      ok:false,
      msg:'hospital no encontrado'
    })
  }
  
  await Hospital.findByIdAndDelete(id)

  res.json({
    ok:true,
    msg:'hopital eliminado'
  })
  
} catch (error) {

  console.log(error)
  res.status(500).json({
    ok:false,
    msg:'hable con el administrador'
  })
  
}
}

module.exports = {
  getHospitales,
  crearHospital,
  actualizarHospital,
  borarHospital
}