import React from 'react';
const human = "/human.png";
const mountain = "/mountain.png";
const whiteHD = "/whiteHS.png";
const Charger2 = "/Charger2.png";
const greenVector = "/greenVector.png";
const footerBackground = "/footerBackground.jpg";
import './components/csss/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={footerBackground} className='footerbackground' />
      {/* Green Flap */}
      <div className='greenFlap'>
        <div className='para'>
          RCG believes in sustainable energy practices that can help preserve our planet.
        </div>
            {/* Green Vector, Mountain, and Human Images */}
        <div>
            <img className='greenVC' src={greenVector} alt="Green Vector" />
            <img className='Mt' src={mountain} alt="Mountain" />
            <img className='Hm' src={human} alt="Human" />
        </div>

          {/* Blue Button */}
          <div className='blue-button'>
            
              <img src={whiteHD} alt="Headset" className='headset2' />
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
            <div className='company'>RECHARGE CHARGINE</div>
          </div>
          <div className='para'>
            We believe in sustainable energy practices that <br/>can help preserve our planet.
          </div>
        </div>

        <div className='call'>
          <div>
          <div className='caps'>CONTACT US </div>
          <div className='name'>Recharga Chargine</div>
          </div>
          <div className='three'>
          <div className='t1'>sahej.sharma@rechargachargine.com</div>
          <div className='t2'>+91-9322107991</div>
          </div>
        </div>
      </div>
    


      <hr />

  
      <div className='third'>
        <div className='copyright'>© Copyright 2024</div>
        <div className='name'>Recharge Chargine.</div>
        <div className='right'>All rights reserved.</div>

      </div>
      
    </div>
  );
};

export default Footer;