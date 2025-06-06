import React from 'react';
import mountain from './Components/images/mountain.png';
import human from './Components/images/human.png';
import whiteHS from './Components/images/whiteHS.png';
import Charger2 from './Components/images/Charger2.png';
import greenVector from './Components/images/greenVector.png';
import footerBackground from './Components/images/footerBackground.jpg';
import "./Components/csss/footer.css";


const Footer = () => {
  return (
    <div className='footer'>
      <img src={footerBackground} className='footerbackground' />
      {/* Green Flap */}
      <div className='greenFlap'>
        <div className='para'>
          RCG believes in sustainable energy practices that can help preserve our planet.
        </div>
            {/* Green Vector, Mountain, d Human Images */}
        <div>
            <img className='greenVC' src={greenVector} alt="Green Vector" />
            <img className='Mt' src={mountain} alt="Mountain" />
            <img className='Hm' src={human} alt="Human" />
        </div>

          {/* Blue Button */}
          <div className='blue-button'>
            
              <img src={whiteHS} alt="Headset" className='headset2' />
              <div className='call2'>
                <div>+91-9322107991</div>
                <div>  Call Us Anytime</div>
              
            </div>
        
        </div>
        
      </div>

      {/* Footer Content */}
      <div className='second'>
        <div className='firstElement'>
          <div className='symbol'>
            <img src={Charger2} alt="Logo" />
            <div className='company'>RECHARGA CHARGINE</div>
          </div>
          <div className='para'>
            We believe in sustainable energy practices that <br/>can help preserve our planet.
          </div>
        </div>

        <div className='call'>
          <div>
          <div className='caps'>CONTACT US </div>
          <div className='name'>RechargaChargine</div>
          </div>
          <div className='three'>
          <div className='t1'>sahej.sharma@rechargachargine.com</div>
          <div className='t2'>+919322107991</div>
          </div>
        </div>
      </div>
    


      <hr />

  
      <div className='third'>
        <div className='copyright'>© Copyright 2024</div>
        <div className='name'>Recharga Chargine.</div>
        <div className='right'>All rights reserved.</div>

      </div>
      
    </div>
  );
};

export default Footer;