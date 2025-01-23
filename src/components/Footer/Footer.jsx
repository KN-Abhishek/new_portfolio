import React from 'react';
import './Footer.css';
import footer_image from '../../assets/kn.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_image} alt="" style={{ width: '150px', height: 'auto' }} />
          <p>Btech in Electronics And Communication Engineering from NSS College Of Engineering</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 KN Abhishek. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </p>
          <a
            href="https://github.com/KN-Abhishek"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kn-abhishek"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
