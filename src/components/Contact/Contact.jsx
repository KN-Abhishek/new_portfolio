import React from 'react';
import './Contact.css'
import themepic from '../../assets/theme_pattern.svg';
import mailicon from '../../assets/mail_icon.svg';
import locationicon from '../../assets/location_icon.svg';
import callicon from '../../assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "edd7d19d-afa6-4bd8-9bad-b9504cd2db10");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={themepic} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>I'm currently available to take on any projects so feel free to send a message and contact me.You can contact me anytime.</p>
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
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="Email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="Message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
     
    </div>
  );
};

export default Contact;