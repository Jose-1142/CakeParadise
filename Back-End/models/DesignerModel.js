const mongoose = require('mongoose')
const designerSchema = new mongoose.Schema({
    cakename:String,
    price:Number,
    imgUrl:String
})
const designerModel = mongoose.model('designerCake',designerSchema)
module.exports = designerModel