import React from 'react';
import './Hero.css';
import profile_image from '../../assets/Profilepic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_image} alt="Logo" style={{ width: '300px', height: 'auto' }} />
      <h1>
        <span className="splash-effect">Hi, I'm Abhishek</span>
         <br />
        <span className="welcome-text">Welcome to my Portfolio!</span>
      </h1>
      <p>
        "I’m an Associate Software Engineer with a strong foundation in Electronics and
        Communication Engineering, blending innovative problem-solving with hands-on expertise in cutting-edge projects
        that bridge hardware and software seamlessly."
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;