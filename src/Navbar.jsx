import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const At = "/At.png";
const Facebook = "/Facebook.png";
const Linkedln = "/Linkedln.png";
const Location2 = "/Location2.png";
const Twitter = "/Twitter.png";
const whatsapp = "/whatsapp.png";
const NewHeadset = "/NewHeadset.png";
const Charger2Path = "/Charger2.png";

import './components/csss/navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className='navbar'>
            <div className='first'>
                <div className='logo'> <img src={Charger2Path} alt="Logo" /></div>
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
                        <div>Jaipur, Rajasthan</div>
                    </div>
                    <ul className='items'>
                        <img src={whatsapp} alt="WhatsApp" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Linkedln} alt="LinkedIn" />
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
                        <div>Call Support 24/7</div>
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
                    <li><Link to='/Home' onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to='/About' onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to='/Contact' onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
