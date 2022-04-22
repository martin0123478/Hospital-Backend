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
  const medicos = await Medico.find()
                              .populate('usuario','nombre')
                              .populate('hospital','nombre')
    res.json({
      ok:true,
      medicos    
  })
  
  
  }
 

const actualizarMedicos= async(req,res ) =>{
  const id = req.params.id
  const uid = req.uid
try {
  const medico= await Medico.findById(id);
  if(!medico){
    res.status(404).json({
      ok:false,
      msg:'hospital no encontrado'
    })
  }
  const cambioMedico = {
    ...req.body,
    usuario:uid
  }
 
  const medicoActualizado = await Medico.findByIdAndUpdate(id, cambioMedico,{new:true})

  res.json({
    ok:true,
    medico:medicoActualizado
  })
  
} catch (error) {

  console.log(error)
  res.status(500).json({
    ok:false,
    msg:'hable con el administrador'
  })
  
}
}

const borarMedicos = async(req,res ) =>{
  const id = req.params.id
  
try {
  const medico= await Medico.findById(id);
  if(!medico){
    res.status(404).json({
      ok:false,
      msg:'medico no encontrado'
    })
  }
  
  await Medico.findByIdAndDelete(id)

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
  getMedicos,
  crearMedicos,
  actualizarMedicos,
  borarMedicos
}