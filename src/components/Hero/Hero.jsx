import React, { useEffect, useState } from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [homeData, setHomeData] = useState(null); 
  const [profileImage, setProfileImage] = useState(null); 
  useEffect(() => {
    
    const fetchHomeData = async () => {
      try {
       
        const response = await fetch('http://localhost:8080/api/home/1'); 
        const data = await response.json();
        setHomeData(data);

        
        const imageResponse = await fetch('http://localhost:8080/api/home/1/image'); 
        const imageBlob = await imageResponse.blob();
        setProfileImage(URL.createObjectURL(imageBlob));
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchHomeData();
  }, []);

  if (!homeData) {
    return <p>Loading...</p>;
  }

  return (
    <div id="home" className="hero">
      
      {profileImage ? (
        <img
          src={profileImage} 
          alt="Profile"
          style={{ width: '300px', height: 'auto' }}
        />
      ) : (
        <img
          src="../../assets/Profilepic.png" 
          alt="Profile"
          style={{ width: '300px', height: 'auto' }}
        />
      )}

      <h1>
        <span className="splash-effect">Hi, I'm Abhishek</span>
        <br />
        <span className="welcome-text">Welcome to my Portfolio!</span>
      </h1>
      <p>{homeData.description}</p>
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
