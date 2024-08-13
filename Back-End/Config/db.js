const mongoose = require('mongoose')
const connectDB = ()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/CakeParadise')
  mongoose.connection.on('connected',()=>{
    console.log('mongodb is connected');
  })
}
module.exports=connectDB