import React from 'react'
import About from '../images/About.png'
import { Link } from 'react-router-dom'


const About1 = () => {
  return (
    <div className='about1'>
       <img className='AboutImage' src={About}/>
       <div className='aboutText'>
        <div className='upper'>About Us</div>
        <span><Link to="/home" className='textlink'>HOME</Link></span>  &gt;
          <span><Link to="/about" className='textlink'>  ABOUT US</Link></span>
       </div>
    </div>
  )
}

export default About1