const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    productId: mongoose.Schema.Types.ObjectId,
    cakename:String,
    price:Number,
    imgUrl:String
})
const cartModel = mongoose.model('carts',cartSchema)
module.exports = cartModel