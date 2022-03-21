const {Schema,model} = require('mongoose')

const UsuarioSchema = Schema({
  nombre:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  img:{
    type:String
  },
  role:{
    type:String,
    require:true,
    default:'USER_ROLE'
  },
  
  google:{
    type:Boolean,
    default:false
  }
},{collection:'hospitales'})

module.exports = model('Usuario', UsuarioSchema)