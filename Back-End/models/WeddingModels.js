const mongoose = require('mongoose')
const weddingSchema = new mongoose.Schema({
    cakename:String,
    price:Number,
    imgUrl:String
})
const weddingModel = mongoose.model('weddingCake',weddingSchema)
module.exports = weddingModel