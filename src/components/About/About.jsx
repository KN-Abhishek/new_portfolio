import React from 'react';
import './About.css';
import profile_image from '../../assets/Profilepic.png';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>Who is Abhishek?</h1>
      </div>
      <div className="about-section">
        
        <div className="about-left">
          <img src={profile_image} alt="Profile" style={{ width: '300px', height: 'auto' }} />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I'm a dedicated Electronics and Communication Engineering graduate with a knack for innovation. I've worked on impactful projects involving microcontrollers and multipliers, showcasing my technical acumen and problem-solving abilities. Currently,
               I’m thriving as an Associate Software Engineer, combining my passion for technology with a drive to create meaningful solutions. Let's connect and build something amazing together!.</p>
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
            <p>5+ PROJECTS COMPLETED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
