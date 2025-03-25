import React from 'react'
import About from '../images/About.png'
import '../csss/ContactCSS/Contact1.css'
import { Link } from 'react-router-dom'


const Contact1 = () => {
  return (
    <div className='contactImage'>
        <img className='contactImage' src={About} />
        <div className='aboutText'>
        <div className='upper'>Contact Us</div>
        <span><Link to="/home" className='textlink'>HOME</Link></span>  &gt;
          <span><Link to="/contact" className='textlink'>  CONTACT US</Link></span>
       </div>
    </div>
  )
}

export default Contact1