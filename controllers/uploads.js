const fileUpload = (req,res) =>{
const { v4 : uuidv4 } = require ('uuid');
  const tipo = req.params.tipo;
  console.log(tipo)
  const id = req.param.id;

  const tiposValidos = ['hospitales','medicos','usuarios']
  if(!tiposValidos.includes(tipo)){
    return res.status(400).json({
      ok:false,
      msg:'No es un medico,usuario,hospital'
    })
  }


  //validar archivo
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      ok:false,
      msg:'No se recibio ningun archivo'
    })
  }

  //procesar imagen 

  const file = req.files.imagen;
  const nombreCortado = file.name.split('.');
  const extensionArchivo = nombreCortado[nombreCortado.length - 1];

  //validar extensión
  const extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'];
  if(!extensionesValidas.includes(extensionArchivo)){
    return res.status(400).json({
      ok:false,
      msg:'No es una extensión permitida'
    })
  }

  //generar nombre del archivo
  const nombreArchivo = `${uuidv4()}.${extensionArchivo}`;

  //path para guardar imagen

  const path = `./uploads/${tipo}/${nombreArchivo }`

  //Mover la imagen 
  file.mv(path, (err) =>{
    if (err){
      console.log(err)
      return res.status(500).json({
        ok:false,
        msg:'Error al mover la imagen'
      })

    }

    res.json({
      ok:true,
     msg:'Archivo subido',
     nombreArchivo
    })

  });
  
}

module.exports = {
  fileUpload
}