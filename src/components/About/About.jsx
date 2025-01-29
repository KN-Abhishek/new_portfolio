import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState(null); 
  const [profileImage, setProfileImage] = useState(null); 

  useEffect(() => {
    
    const fetchAboutData = async () => {
      try {
        
        const response = await fetch('http://localhost:8080/api/about/1'); 
        const data = await response.json();
        setAboutData(data);

        
        const imageResponse = await fetch('http://localhost:8080/api/about/6/image'); 
        const imageBlob = await imageResponse.blob();
        setProfileImage(URL.createObjectURL(imageBlob));
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>Who is Abhishek?</h1>
      </div>
      <div className="about-section">

        <div className="about-left">
          {profileImage ? (
            <img src={profileImage} alt="Profile" style={{ width: '300px', height: 'auto' }} />
          ) : (
            <p>Loading image...</p>
          )}
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>{aboutData.description}</p>
          </div>
          <div className="about-skills">
            {aboutData.skills.split(',').map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.trim()}</p>
                <hr style={{ width: `${Math.random() * 30 + 50}%` }} />
              </div>
            ))}
          </div>
          <div className="about-achievements">
            <h1>{aboutData.achievements.split(',')[0]}</h1>
            <p>{aboutData.achievements.split(',')[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
