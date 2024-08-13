const bodyParser = require('body-parser')
const express = require('express')
const cors =require('cors')
const connectDB = require('./Config/db')
const productModel = require('./models/product-models')
const bDayModel = require('./models/BdatMOdel')
const weddingModel = require('./models/WeddingModels')
const designerModel = require('./models/DesignerModel')
const app = express()
const usermodel = require('./models/user-models')
const cartmodel = require('./models/Cart-models')
// const cartRouter = require('./Router/CartRoute')
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
// app.use('/cart', cartRouter)
connectDB()

app.post('/Login',(req,res)=>{
    const {email, password} =req.body
    usermodel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json('welcome')
            }
            else{
                res.json('incorrect password')
            }
        }
        else{
             res.json('invaild user')
        }
    })
})

app.post('/Users',(req,res)=>{
    usermodel.create(req.body)
    .then(response => res.json(response))
    .catch(error => res.json(error))
})

app.post('/products',(req,res)=>{
    productModel.create(req.body)
    .then(response => res.json(response))
    .catch(error => res.json(error))
})

app.post('/bDayModel',(req,res)=>{
    bDayModel.create(req.body)
    .then(response => res.json(response))
    .catch(error => res.json(error))
})

app.post('/weddingModel',(req,res)=>{
    weddingModel.create(req.body)
    .then(response => res.json(response))
    .catch(error => res.json(error))
})

app.post('/designerModel',(req,res)=>{
    designerModel.create(req.body)
    .then(response => res.json(response))
    .catch(error => res.json(error))
})


app.get('/getProduct', (req,res)=>{
    productModel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get('/bDayModel', (req,res)=>{
    bDayModel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get('/weddingModel', (req,res)=>{
    weddingModel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get('/designerModel', (req,res)=>{
    designerModel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.post('/addtocart', async (req, res)=>{
    const cartItem = new cartmodel(req.body)
    await cartItem.save()
    res.json(cartItem)
})

app.get('/getcart', (req, res)=>{
    cartmodel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.delete('/cart/:id', async(req,res)=>{
    const {id} = req.params
    await cartmodel.findByIdAndDelete(id)
    res.json({message: 'item removed from cart'})
})
app.listen(3007,()=>{
    console.log('server is running')
})
