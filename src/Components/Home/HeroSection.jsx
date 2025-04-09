import React from 'react'
import image from "../images/image.png"
import '../csss/HomeCSS/hero.css'

const HeroSection = () => {
  return (
    <div className="banner">
    <img
      src={image}
      alt="Windmill"
      className="bannerimage"
    />
    </div>
  )
}

export default HeroSection