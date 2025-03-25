import React, { useState, useEffect, useRef } from 'react';
import '../csss/HomeCSS/Section6.css';

const Section6 = ({section6ref}) => {
  const ref = useRef(null); // ✅ Define ref properly

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    intercoms: '',
    message: '',
    agreeTerms: false, // ✅ Added missing fields
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // ✅ Fix checkbox handling
    });
  };

  // Check if all required fields are filled
  useEffect(() => {
    const allFilled = 
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.message.trim() !== '' &&
      formData.agreeTerms; // ✅ Ensure terms are accepted

    setIsFormValid(allFilled);
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append('access_key', 'd354e4fe-b7ae-449d-b15c-4dd1e31dc92a'); // ✅ Use your access key

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      alert('Your form is successfully submitted!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        intercoms: '',
        message: '',
        agreeTerms: false,
      });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='section6' ref={section6ref}> 
      <div className='text-part'>
        <div className='small'>Contact Recharga Chargine</div>
        <div className='big'>Get In Touch With Us</div>
        <div className='details'>
          We’re finding ways to bring energy to more people in more ways every day.
        </div>
        <div className='address'>
          <div className='top'>
            <div>Our Address</div>
            <div>Our Mail Address</div>
          </div>
          <div className='bottom'>
            <div>Jaipur, Rajasthan, India</div>
            <div>salesinquiry@rechargachargine.com</div>
          </div>
        </div>
      </div>
      <div className='form-part'>
        <hr className='green-line'/>
      <form className='form-fill' onSubmit={handleSubmit}>

        <div className='input1'>
          <input type="text" placeholder='Name*' name="name" onChange={handleChange} value={formData.name} />
          <input type="email" placeholder='Email*' name="email" onChange={handleChange} value={formData.email} />
        </div>
        <div className='input2'>
          <input type="text" placeholder='Phone*' name="phone" onChange={handleChange} value={formData.phone} />
          <input type="text" placeholder='Intercoms' name="intercoms" onChange={handleChange} value={formData.intercoms} />
        </div>
        <div className='input3'>
          <textarea placeholder='Message*' name="message" onChange={handleChange} value={formData.message} />
          <div className='checkbox-div'>
            <input type="checkbox" className='checkbox' name="agreeTerms" onChange={handleChange} checked={formData.agreeTerms} />
            <label> Accept terms and conditions from Recharge Chargine</label>
          </div>
          <button type="submit"className='' disabled={!isFormValid}>Send us an email</button> {/* ✅ Disable button if form is invalid */}
        </div>

        
      </form>
    </div>
    </div>
  );
};

export default Section6;
