import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
        <nav class="navbar">

            <h3 className='logo'>Cake Paradise</h3>
            <input type="checkbox" id="toggler"/>
            <label for="toggler">menu</label>
            <div class="menu">
                <ul className="list">
                  <li><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/about'>About</NavLink></li>
                  {/* <li><NavLink to='/trending'>Trending</NavLink></li> */}
                  <li><NavLink to='/Users'>Signup</NavLink></li>
                  <li><NavLink to='/contact'>Contact</NavLink></li>
                  <li><NavLink to='/AddtoCart'>My Carts</NavLink></li>
                </ul>
              </div>
        </nav>
  )
}
