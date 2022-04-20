const fs = require('fs')
const Usuario = require('../models/usuario')
const Hospital = require('../models/hospital')
const Medico = require('../models/medico')

const borrarImagen = (path) =>{
  // const pathViejo = `./uploads/medicos/${medico.img}`;
      if(fs.existsSync(path)){
        //borrar la imagen anterior
        fs.unlinkSync(path)
      }
}
const actualizarImagen  = async (tipo,id,nombreArchivo  ) =>{
  switch (tipo) {
    case 'medicos':
      const medico = await Medico.findById(id);
      if(!medico){
        console.log('no es un medico por id')
        return false;
      }
      const pathViejo = `./uploads/medicos/${medico.img}`;
      borrarImagen(pathViejo)
      medico.img = nombreArchivo;
      await medico.save();
      return true;
      break;
    case 'hospitales':
      const hospital = await Hospital.findById(id);
      if(!hospital){
        console.log('no es un hospital por id')
        return false;
      }
      const pathViejos = `./uploads/hospitales/${hospital.img}`;
      borrarImagen(pathViejos)
      hospital.img = nombreArchivo;
      await hospital.save();
      return true;
      
    break;
    case 'usuarios':
      const usuario = await Usuario.findById(id);
      if(!usuario){
        console.log('no es un usuario por id')
        return false;
      }
      const pathViejoss = `./uploads/usuarios/${usuario.img}`;
      borrarImagen(pathViejoss)
      usuario.img = nombreArchivo;
      await usuario.save();
      return true;
      
    break;
  
    default:
      break;
  }
}


module.exports = {
  actualizarImagen
}