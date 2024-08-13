const mongoose = require('mongoose')
const bDaySchema = new mongoose.Schema({
    cakename:String,
    price:Number,
    imgUrl:String
})
const bDayModel = mongoose.model('bDayCake',bDaySchema)
module.exports = bDayModel