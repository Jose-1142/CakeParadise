import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3007/users',{name, email, password})
        .then(res=>{console.log(res)
          navigate('/Login')
      })
      .catch(err=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label>E-mail</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Submit</button>
        </form>
        <p> if your have an account already <Link to='/Login'>Login</Link></p>

    </div>
  )
}
