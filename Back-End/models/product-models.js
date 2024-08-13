const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    cakename:String,
    price:Number,
    imgUrl:String
})
const productModel = mongoose.model('products',productSchema)
module.exports = productModel