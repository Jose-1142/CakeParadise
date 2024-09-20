import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function WeddingCake() {
  const [product, setProduct] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3007/weddingModel')
    .then(user => {
      const updateProduct = user.data.map(product=>({...product, quantity:1}))
      setProduct(updateProduct)})
      .catch(err => console.log(err))
  }, [])

  const addToCart =async(product) =>{
    await axios.post('http://localhost:3007/addtocart', product)
    .then(response => {alert('product added to your cart')})
    .catch(error => {alert(error)})
  }

  const handleDecrease = (id) =>{
    setProduct(product.map(product => 
      product._id === id && product.quantity > 0.5
      ? {...product, quantity : product.quantity-0.5}:product
      
    ))
  }
  const handleIncrease=(id)=>{
    setProduct(product.map(product=>
      product._id === id 
      ?{...product,quantity: product.quantity+0.5}:product
    ))
  }
  return (
    <>
    <h1>Wedding Cake</h1>
      <div className='Bday-container'>
        {product.map(product => {
          return <div class="Bday-card">
            <img src={product.imgUrl} alt='uploaded' />
            <div class="card-body">
              <h5 class="card-title">{product.cakename}</h5>
              <h5>Rs.{product.price*product.quantity}</h5>
              <p><button className='btn' onClick={()=>handleDecrease(product._id)} >-</button>{product.quantity}kg<button className='btn' onClick={()=>handleIncrease(product._id)}>+</button></p>
              <button className='btn' onClick={()=> addToCart(product)} >AddtoCart</button>
              <button className='btn' onClick={() => { navigate('/Placeorder',{ state: { product } }) }} >Buy Now</button>
            </div>
          </div>
        })}
      </div>
    </>
  )
}