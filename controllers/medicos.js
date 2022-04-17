const getMedicos = (req,res ) =>{
  res.json({
    ok:true,
    msg:'get Medicos'
  })
}

const crearMedicos = async(req,res ) =>{
  
    res.json({
      ok:true,
      msg:'crear medico'
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