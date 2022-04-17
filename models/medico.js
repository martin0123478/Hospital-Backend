const {Schema,model} = require('mongoose')

const MedicoSchema = Schema({
  nombre:{
    type:String,
    require:true
  },
  
  img:{
    type:String
  },
  usuario:{
    require:true,
    type:Schema.Types.ObjectId,
    ref:'Usuario'
  },
  hospital:{
    type:Schema.Types.ObjectId,
    ref:'Hospital',
    required:true
  }
  
})

module.exports = model('Medico', MedicoSchema)