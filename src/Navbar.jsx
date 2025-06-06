import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import At from './Components/images/At.png';
import Facebook from './Components/images/Facebook.png';
import Linkedln from './Components/images/Linkedln.png';
import Location2 from './Components/images/Location2.png';
import Twitter from './Components/images/Twitter.png';
import whatsapp from './Components/images/whatsapp.png';
import NewHeadset from './Components/images/NewHeadset.png';
import Charger2 from './Components/images/Charger2.png';
import "./Components/csss/navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className='navbar'>
            <div className='first'>
                <div className='logo'> <img src={Charger2} alt="Logo" /></div>
                <div className='name'>Recharga Chargine</div>
                <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776; {/* Hamburger icon */}
                </div>
            </div>
            <div className='vl'></div>
            <div className='second'>
                <div className='top'>
                    <div className='item1'>
                        <div><img className='at' src={At} alt="Email" /></div>
                        <div className='mail'>salesquiry@rechargachargine.com</div>
                    </div>
                    <div className='item2'>
                        <div><img className='at' src={Location2} alt="Location" /></div>
                        <div>Jaipur,Rajasthan</div>
                    </div>
                    <ul className='items'>
                        <img src={whatsapp} alt="WhatsApp" />
                        <img src={Twitter} alt="Twitter" />
                        <Link to='https://www.linkedin.com/company/recharga-chargine/'><img src={Linkedln} alt="LinkedIn" /></Link>
                        <img src={Facebook} alt="Facebook" />
                        <select className='eng' disabled>
                            <option value="Eng">Eng</option>
                        </select>
                    </ul>
                </div>
            </div>
            <div className='bottom'>
                <div className='parts'>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </div>
                <div className='vl2'></div>
                <div className='support'>
                    <img className='headset' src={NewHeadset} alt="Support" />
                    <div className='call'>
                        <div className='call1'>Call Support 24/7</div>
                        <div className='number'>+91 9322107991</div>
                    </div>
                </div>
                <div className='vl3'></div>
                <div className='last'>
                    <button>Get A Quote</button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {menuOpen && (
                <div className='mobile-menu'>
                    <li><Link to='/Home' onClick={() => setMenuOpen(false)} className='home'>Home</Link></li>
                    <li><Link to='/About' onClick={() => setMenuOpen(false)}className='about'>About</Link></li>
                    <li><Link to='/Contact' onClick={() => setMenuOpen(false)} className='contact'>Contact</Link></li>
                    <div>
                        <div>
                            <div className='mail'>
                                <img className='at' src={At}  />
                               <div>salesquiry@rechargachargine.com</div>
                               </div>
                            <div className='support'>
                                 <img className='headset' src={NewHeadset} alt="Support" />
                                 <div className='call'>
                                    <div>Call Support 24/7</div>
                                    <div className='number'>+91 9322107991</div>
                                 </div>
                            </div>
                        </div>
                        
                      
                    </div>
                </div>
                
            )}
        </div>
        </>
    );
}

export default Navbar;
