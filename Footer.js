import React from 'react'
import faceBook from '../images/facebook_icon.png'
import linkedin from '../images/linkedin_icon.png'
import twitter from '../images/twitter_icon.png'
export default function Footer() {
  return (
    <div>
      <div className='footer' id='footer'>
        <div className='footer-container'>
          <div className='footer-left'>
            <h3 className='logo'>Cake Paradise</h3>
          </div>
          <div className='footer-icon'>
            <img src={faceBook} alt='' />
            <img src={twitter} alt='' />
            <img src={linkedin} alt='' />
          </div>
          <div className='footer-right'>
            <h2>Get in touch</h2>
            <ul>
              <li>+918608199698</li>
              <li>cakeparadise@gmail.com</li>
            </ul>
          </div>
          <h1>Words are not enough to tell about cake Paradise</h1>
          <div className='aboutCard'>
            <div class="card footer-card" >
              <i class="bi bi-emoji-smile"></i>
              <div class="card-body">
                <h5 class="card-title">20000+<span>smiles Deliver</span></h5>
              </div>
            </div>
            <div class="card footer-card" >
              <i class="bi bi-geo-alt"></i>
              <div class="card-body">
                <h5 class="card-title">2000+<span>pincode covered</span></h5>
              </div>
            </div>
          </div>

        </div>
        <hr></hr>
        <p className='copyright'>Copyright 2024 @ cakeparadise.com - All Right Reserved</p>
      </div>

    </div>
  )
}
