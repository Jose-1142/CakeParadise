import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AddtoCart() {
  const [cartItem, setCartItem] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetchCart()
  })
  const fetchCart = () =>{
    axios.get('http://localhost:3007/getcart')
    .then(response =>{
      setCartItem(response.data)
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const removeCart = (id) =>{
    axios.delete(`http://localhost:3007/cart/${id}`)
    .then(res=>{
      alert('product Removed from cart')
    })
    .catch(err =>{
      console.log(err)
    })
  }
  
 
  
    const calculate =() =>{
    return cartItem.reduce((total,product) => total + product.price, 0)
  }
  return (
    <>
    <div className='cart'>
      <div className='cart-item'>
        <div className='cart-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Remove</p>
        </div><br /><hr />
        {cartItem.map((product) => (
          <div>
          <div key={product._id} className="cart-title cart-items">
            <img src={product.imgUrl} alt='uploaded' />
            <p>{product.cakename}</p>
            {/* <p><button onClick={()=>handleDecrease(product._id)} >-</button>{qty}<button onClick={()=>handleIncrease(product._id)}>+</button></p> */}
              <p>Rs.{product.price}</p> 
              <p><button className='btn' onClick={()=>removeCart(product._id)}>X</button></p>
              <button className='btn' onClick={() => { navigate('/Placeorder',{ state: { product } }) }} >Buy Now</button>
          </div><hr/>
          </div>
        ))}

      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total : {calculate()}</h2>
          </div>
      </div>
    </div>
        </>
  );
}
