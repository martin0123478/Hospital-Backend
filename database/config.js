const mongoose = require('mongoose');

  
const dbConection = async () =>{
  try {
    await mongoose.connect('mongodb+srv://mean_user:kk4Ww1jkl8ajByh1@cluster0.f5xfp.mongodb.net/hospitalbd',{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log('BD Online')
  } catch (error) {
    console.log(error)
    throw new Error('Error al crear la coneccion con la BD')
  }
 

}

module.exports = {
  dbConection
}