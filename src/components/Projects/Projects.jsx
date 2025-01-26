import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import project_1 from '../../assets/project_1.svg';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-section">
        <div className="project-row">
          <div className="project-card" key="project1">
            <h2>Portfolio Website</h2>
            <p>
              <strong>Description:</strong> A personal portfolio website showcasing my skills, projects, and achievements. Built with React.js and styled with CSS.
            </p>
            <p>
              <strong>Technologies:</strong> React.js, CSS, JavaScript
            </p>
            <Link to="/project1" className="project-button">View Project</Link>
          </div>

          <div className="project-card" key="project2">
            <h2>Grievance Management System</h2>
            <p>
              <strong>Description:</strong> A web application to manage grievances with roles like User, Supervisor, and Assignee. Includes backend APIs and a React frontend.
            </p>
            <p>
              <strong>Technologies:</strong> React.js, Spring Boot, PostgreSQL
            </p>
            <Link to="/project2" className="project-button">View Project</Link>
          </div>
        </div>

        <div className="project-row">
          <div className="project-card" key="project3">
            <h2>Biometric Attendance Management System With Door Lock</h2>
            <p>
              <strong>Description:</strong> A system to confirm fingerprints before granting class entry and automatically locking after a time limit.
            </p>
            <p>
              <strong>Technologies:</strong> Biometric Sensors, Microcontrollers Arduino, Solenoid Locks, Servo Motors, Python, RFID, AWS
            </p>
            <Link to="/project3" className="project-button">View Project</Link>
          </div>

          <div className="project-card" key="project4">
            <h2>Water Level Controller Using 8051 Microcontroller</h2>
            <p>
              <strong>Description:</strong> Automatically regulates water levels in a tank using the 8051 microcontroller.
            </p>
            <p>
              <strong>Technologies:</strong> 8051 Microcontroller, Water Level Sensors, LCD Display, Relay Module , Buzzer, Voltage Regulator, PCB/Prototyping Board, Software/Programming Language, Water Pump
            </p>
            <Link to="/project4" className="project-button">View Project</Link>
          </div>

          <div className="project-card" key="project5">
            <h2>Automatic Bus Transport System With Three Layer Safety Measures</h2>
            <p>
              <strong>Description:</strong> Enhances bus safety and efficiency with Arduino-based technology and sensors.
            </p>
            <p>
              <strong>Technologies:</strong> Arduino Microcontroller, GPS Module, Speed Sensors , Ultrasonic Sensors, LCD Display, Relay Module, C++ or Arduino IDE 
            </p>
            <Link to="/project5" className="project-button">View Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
