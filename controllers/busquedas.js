//getTodo
const Usuario = require('../models/usuario')
const Hospital = require('../models/hospital')
const Medico = require('../models/medico')
const getTodo =async (req,resp) =>{
  const busqueda = req.params.busqueda;
  const regex = new RegExp(busqueda, 'i');
  const [usuarios,hospitales, medicos] =await Promise.all([
     Usuario.find({nombre: regex}),
     Hospital.find({nombre:regex}),
     Medico.find({nombre:regex})
  ])
  resp.json({
    ok:true,
    usuarios,
    hospitales,
    medicos
  })
}

module.exports = {
  getTodo
}