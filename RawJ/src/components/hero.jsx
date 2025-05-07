import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <div className='hero-container'>
    <div className='hero-image'>
      <img src="../images/hero.jpg" alt="Jewelry" className='img1' loading='lazy' width="500" height="550"/>
    
    </div>
    <div className='Hero-text'>
      <h1>
        Discover Elegance with Crazy
        </h1></div>
    </div>
  )
}

export default Hero