import React, { useState } from 'react';
import './Contact.css';
import mailicon from '../../assets/mail_icon.svg';
import locationicon from '../../assets/location_icon.svg';
import callicon from '../../assets/call_icon.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
  
    const { name, email, message } = formData;
  
    if (!name || !email || !message) {
      alert('All fields are required');
      return;
    }
  
    const contactData = { name, email, message };
  
    try {
      const res = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error response:', errorData);
        alert('There was an issue submitting the form ;(');
        return;
      }
  
      const response = await res.json();
      alert('Contact form submitted successfully, we will get back to you ;)');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error with the submission. Check the console for details. :(');
    }
  };
  
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Reach Out to Me</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>I'm currently available to take on any projects so feel free to send a message and contact me. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailicon} alt="" /><p>abhishek.kanjanghat@tarento.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={locationicon} alt="" /><p>Bangalore</p>
                    </div>
                    <div className="contact-detail">
                        <img src={callicon} alt="" /><p>8921492939</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input 
                  type="text" 
                  placeholder='Enter Your Name' 
                  name='name' 
                  value={formData.name}
                  onChange={onChange}
                />
                <label htmlFor="">Your Email</label>
                <input 
                  type="email" 
                  placeholder='Enter Your Email' 
                  name='email'
                  value={formData.email}
                  onChange={onChange}
                />
                <label htmlFor="">Write Your Message Here</label>
                <textarea 
                  name="message" 
                  rows="8" 
                  placeholder='Enter Your Message'
                  value={formData.message}
                  onChange={onChange}
                ></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
