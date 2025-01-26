import React from 'react';
import './Footer.css';
import footer_image from '../../assets/kn.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footer_image} alt="Logo" />
      <p>B.Tech in Electronics and Communication Engineering from NSS College of Engineering</p>
      <div className="footer-links">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
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
