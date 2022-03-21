const {Schema,model} = require('mongoose')

const HospitalSchema = Schema({
  nombre:{
    type:String,
    require:true
  },
  
  img:{
    type:String
  },
  usuario:{
    type:Schema.Types.ObjectId,
    ref:'Usuario'
  }
  
})

module.exports = model('Usuario', HospitalSchema)