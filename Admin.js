import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Admit() {
  // For Create
    const [cakename, setCakename] = useState('')
    const [price, setPrice] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [list, setList] = useState([])
    const [popup, setPopup] = useState(false)
    const [select, setSelect] = useState('')

    const handleSubmit = ()=>{
      if(select === 'birthDay-Cake'){
        axios.post('http://localhost:3007/bDayModel',{cakename, price, imgUrl})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      }else if(select === 'designer-Cake'){
        axios.post('http://localhost:3007/designerModel',{cakename, price, imgUrl})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      }else if(select === 'wedding-Cake'){
        axios.post('http://localhost:3007/weddingModel',{cakename, price, imgUrl})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      }
      setCakename('')
      setPrice('')
      setImgUrl('')
    }
    // For Update
    const [cakename1, setCakename1] = useState('')
    const [price1, setPrice1] = useState('')
    const [imgUrl1, setImgUrl1] = useState('')
    
    const handelUpdate = (data)=>{
      setPopup(true)
      setCakename1(data.cakename)
      setPrice1(data.price)
      setImgUrl1(data.imgUrl)
    }
    const handleChange = ()=>{
      axios.put(`http://localhost:3007/getProduct${cakename1}`,{cakename1,price1,imgUrl1})
      .then(res=>{setList(res);})
      .catch(err=>{console.log(err);})
    }
    const handleDelete = ()=>{

    }
    useEffect(()=>{
      axios.get('http://localhost:3007/getProduct')
      .then(x => setList(x.data))
      .catch(err => console.log(err))
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>Cake Name</label>
          <input type='text' value={cakename} onChange={(e)=>{setCakename(e.target.value)}}/><br/>
          <label> Cake Price</label>
          <input type='number' value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>
          <label>Img url</label>
          <input type='text' value={imgUrl}  onChange={(e)=>{setImgUrl(e.target.value)}} /><br/>
          <select onClick={(e)=>{setSelect(e.target.value)}} required >
            <option>Category</option>
            <option value='birthDay-Cake' >BirthDay Cake</option>
            <option value='designer-Cake' >Designer Cake</option>
            <option value='wedding-Cake' >Wedding Cake</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Cake Name</th>
                <th>Price</th>
                <th>image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map(x=>(
                <tr>
                  <td>{x.cakename}</td>
                  <td>{x.price}</td>
                  <td><img src={x.imgUrl} alt='uploaded'/></td>
                  <td><button onClick={()=>handelUpdate(x)}>Update</button>  <button onClick={handleDelete}>Delete</button></td>    
                </tr>
              ))}
            </tbody>
          </table>
          {popup && 
          <form onSubmit={handleChange}>
            <label>Cake Name</label>
            <input type='text' value={cakename1} onChange={(e)=>{setCakename1(e.target.value)}}/><br/>
            <label> Cake Price</label>
            <input type='number' value={price1} onChange={(e)=>{setPrice1(e.target.value)}}/><br/>
            <label>Img url</label>
            <input type='text' value={imgUrl1}  onChange={(e)=>{setImgUrl1(e.target.value)}} />
            <button type='submit'>Change</button>
          </form>}
        </div>
    </div>
  )
}
