import React from 'react';
import './About.css';
import themepic from '../../assets/theme_pattern.svg';
import profile_image from '../../assets/Profilepic.png';

const About = () => {
  return (
    <div className='about'id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={themepic} alt="Theme Pattern" />
      </div>
      <div className="about-section">
        
        <div className="about-left">
          <img src={profile_image} alt="Profile" style={{ width: '300px', height: 'auto' }} />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>Hello, I'm Abhishek!</p>
            <p>I’m a passionate Associate Software Engineer with a background in Electronics and Communication Engineering.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Arduino</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Micro Controllers</p>
              <hr style={{ width: "78%" }} />
            </div>
          </div>
          <div className="about-achievements">
            <h1>FRESHER</h1>
            <p>6+ PROJECTS COMPLETED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 