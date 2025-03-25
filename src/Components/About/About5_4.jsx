import React from 'react'
import i4 from '../images/i4.png'
import '../csss/AboutCSS/About5.css'

const About5_4 = () => {
  return (
     <div className='about5_4'>
    <div className='box'>
        <div className='bold'>Magnetic Flux Variation</div>
        <div className='normal'>The generator contains a fully multi-rotor design which divides into five sections(rotors). Three of these sections have neodymium-iron-boron magnets, and two have copper coils. As the rotors spin, they create a dynamic interaction between the magnetic field and the coils.</div>
    </div>
    <img src={i4}/>
</div>
  )
}

export default About5_4