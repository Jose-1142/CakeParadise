import axios from 'axios'
import React, {useState } from 'react'
import {  useNavigate } from 'react-router-dom'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3007/Login',{email,password})
        .then(res=>{console.log(res);
            if(res.data === 'welcome'){
                navigate('/')
            }
        })
        .catch(err=>(console.log(err)))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}
