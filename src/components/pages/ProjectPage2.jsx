import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css'; 

const ProjectPage2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id= "project-page" className="project-page">
      <h1 className="fade-in">Grievance Management System</h1>
      <br/>
      <div className="project-details fade-in">
        <section>
          <h2>Description</h2>
          <p>
            A web-based platform designed to streamline the process of lodging, tracking, and resolving grievances within an organization. 
            The system enables users to submit complaints, which are reviewed and assigned to supervisors or assignees for resolution. 
            Built with <strong>React.js</strong> for the frontend, <strong>Spring Boot</strong> for the backend, and <strong>PostgreSQL</strong> as the database, 
            the platform provides transparency, accountability, and real-time updates for all users.
          </p>
        </section>
        <section>
          <h2>Project Overview</h2>
          <p>
            The <strong>Grievance Management System</strong> facilitates the submission, tracking, and resolution of grievances within an organization. 
            It supports roles such as <strong>User</strong>, <strong>Supervisor</strong>, and <strong>Assignee</strong>, ensuring streamlined workflows. 
            With features like real-time notifications, role-based access, and comprehensive reporting, the system ensures efficient and timely resolution of grievances.
          </p>
        </section>
        <section>
          <h2>Principle of Operation</h2>
          <ul>
            <li><strong>User Registration and Login:</strong> Users register and log in using their credentials.</li>
            <li><strong>Submission of Grievances:</strong> Users can describe the issue, attach documents, and categorize grievances via a simple form.</li>
            <li><strong>Grievance Review:</strong> Supervisors review grievances and assign them to specific assignees.</li>
            <li><strong>Resolution:</strong> Assignees resolve grievances and update their status in real time.</li>
            <li><strong>Notifications:</strong> All roles receive updates on grievance progress and status changes.</li>
            <li><strong>Tracking and Reporting:</strong> Supervisors can generate detailed reports on resolved and pending grievances.</li>
          </ul>
        </section>
        <section>
          <h2>System Design and Features</h2>
          <h3>Frontend (React.js)</h3>
          <ul>
            <li>Responsive interface for users, supervisors, and assignees.</li>
            <li>Dynamic components for real-time updates and notifications.</li>
          </ul>
          <h3>Backend (Spring Boot)</h3>
          <ul>
            <li>Handles REST APIs for user authentication and grievance management.</li>
            <li>Implements robust role-based access control.</li>
          </ul>
          <h3>Database (PostgreSQL)</h3>
          <ul>
            <li>Efficient storage and querying of grievance and user data.</li>
          </ul>
          <h3>Key Features</h3>
          <ul>
            <li><strong>Real-time Notifications:</strong> Keeps users updated on grievance status.</li>
            <li><strong>Role-Based Access:</strong> Different features available based on user roles.</li>
            <li><strong>Reporting:</strong> Supervisors can generate detailed reports for better insights.</li>
          </ul>
        </section>
        <section>
          <h2>Applications and Benefits</h2>
          <h3>Applications</h3>
          <ul>
            <li><strong>Human Resource Management:</strong> Handles employee grievances efficiently.</li>
            <li><strong>Customer Support:</strong> Manages customer complaints and resolutions.</li>
            <li><strong>Issue Tracking:</strong> Adaptable for internal issue management.</li>
            <li><strong>Compliance:</strong> Ensures adherence to policies and governance standards.</li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>Improves transparency and accountability.</li>
            <li>Streamlines issue resolution processes.</li>
            <li>Enhances communication with real-time updates.</li>
            <li>Scalable and cost-effective solution for organizations.</li>
          </ul>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            The <strong>Grievance Management System</strong> provides an efficient solution for managing grievances within organizations. 
            By fostering transparency, accountability, and efficient communication, the platform ensures timely resolution of issues. 
            Built with scalable technologies like <strong>React.js</strong>, <strong>Spring Boot</strong>, and <strong>PostgreSQL</strong>, it supports various organizational needs and grows with the organization.
          </p>
        </section>
        <section>
          <h2>Technologies</h2>
          <p>React.js, Spring Boot, PostgreSQL</p>
        </section>
      </div>
      <br/>
      <div className="home-link">
        <Link to="/" className="home-button fade-in">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProjectPage2;
