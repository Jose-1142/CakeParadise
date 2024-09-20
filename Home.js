import React, { useState } from 'react'
import carousel1 from '../images/carousel1.avif'
import carousel2 from '../images/Carousel2.avif'
import carousel3 from '../images/carousel3.avif'
import birthday from '../images/Birthday cake.jpg'
import Designer from '../images/Designer cake.jpg'
import Wedding from '../images/Wedding Cake.webp'
import Pullme from '../images/Pullme Cake.jpg'
import bombcake from '../images/bomb_cake.avif'
import pinataCake from '../images/pinata_cake.avif'
import Desserts from '../images/Desserts.jpg'
import BdayCake from './BdayCake'
import WeddingCake from './WeddingCake'
import DesignCake from './DesignCake'


export default function Home() {
    const [bday, setBday] = useState(false)
    const [design, setDesign] = useState(false)
    const [wedding, setWedding] = useState(false)


    const handleBday = () => {
        setBday(true)
        setWedding(false)
        setDesign(false)
    }
    const handleWedding = () => {
        setWedding(true)
        setDesign(false)
        setBday(false)
    }
    const handleDesign = () => {
        setDesign(true)
        setBday(false)
        setWedding(false)
    }

    return (
        <div>
            {/*<------- Carousel-----> */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carousel1} class="d-block w-100" alt="Carousel-img" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel2} class="d-block w-100" alt="Carousel-img" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel3} class="d-block w-100" alt="Carousel-img" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div id='head-div'>
                <h1>Fresh & Delicious Cakes by Cake Paradise</h1>
            </div>

            {/* <-------Card------> */}
            <div className='container-card'>
                <div class="card" onClick={handleBday} >
                    <img src={birthday} class="card-img-top" alt='cake-img' />
                    <div class="card-body">
                        <h5 class="card-title">Birthday Cake</h5>
                    </div>
                </div>
                <div class="card" onClick={handleWedding}>
                    <img src={Wedding} class="card-img-top" alt='cake-img' />
                    <div class="card-body">
                        <h5 class="card-title">Wedding Cake</h5>
                    </div>
                </div>
                <div class="card" onClick={handleDesign}>
                    <img src={Designer} class="card-img-top" alt='cake-img' />
                    <div class="card-body">
                        <h5 class="card-title">Designer Cake</h5>
                    </div>
                </div>
            </div>

            <div className='display-item'>
                {bday && <BdayCake />}
                {wedding && <WeddingCake />}
                {design && <DesignCake />}
            </div>
            {/* <------Trending cake card------> */}
            <div id='head-div'><h1>Trending Cake</h1></div>

            <div className='container-card1'>
                <div class="card1" >
                    <img src={Pullme} class="card-img-top" alt='cake-img' />
                    <div class="card-body">
                        <h5 class="card-title">Pull me up Cake</h5>
                    </div>
                </div>
                <div class="card1" >
                    <img src={bombcake} class="card-img-top" alt='cake-img' />
                    <div class="card-body">
                        <h5 class="card-title">Bomb-Cake</h5>
                    </div>
                </div>
                <div class="card1" >
                    <img src={pinataCake} class="card-img-top" alt='cake-img' />
                    <div class="card-body">
                        <h5 class="card-title">Pinata-Cake</h5>
                    </div>
                </div>
                <div class="card1" >
                    <img src={Desserts} class="card-img-top" alt='cake-img' />
                    <div class="card-body">
                        <h5 class="card-title">Desserts</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
