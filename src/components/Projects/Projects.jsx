import React from 'react';
import './Projects.css';
import themepic from '../../assets/theme_pattern.svg';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={themepic} alt="Theme Pattern" />
      </div>
      <div className="projects-section">
        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>
            <strong>Description:</strong> A personal portfolio website showcasing my skills, projects, and achievements. Built with React.js and styled with CSS.
          </p>
          <p>
            <strong>Technologies:</strong> React.js, CSS, JavaScript
          </p>
          <Link to="/project1">View Project</Link>
        </div>

        <div className="project-card">
          <h2>Grievance Management System</h2>
          <p>
            <strong>Description:</strong> A web application to manage grievances with roles like User, Supervisor, and Assignee. Includes backend APIs and a React frontend.
          </p>
          <p>
            <strong>Technologies:</strong> React.js, Spring Boot, PostgreSQL
          </p>
          <Link to="/project2">View Project</Link>
        </div>

        <div className="project-card">
          <h2>Biometric Attendance Management System With Door Lock</h2>
          <p>
            <strong>Description:</strong>The project aims to confirm the finger print of each student before allotting them to the class.
             Setting a time limit of few minutes for the student to enter the class, after which the entry will be locked . 
          </p>
          <p>
            <strong>Technologies:</strong> Arduino IDE · Python (Programming Language) · C++ · 
          </p>
          <Link to="/project3">View Project</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
