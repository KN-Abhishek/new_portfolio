import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import footer_image from '../../assets/kn.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/'); // Go to home page first
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <img src={footer_image} alt="Logo" />
      <p>B.Tech in Electronics and Communication Engineering from NSS College of Engineering</p>
      <div className="footer-links">
        <p className="anchor-link" onClick={handleNavigateToContact} style={{ cursor: 'pointer' }}>
          Connect With Me
        </p>
        <a
          href="https://github.com/KN-Abhishek"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/kn-abhishek"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p className="footer-bottom">© 2025 KN Abhishek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
