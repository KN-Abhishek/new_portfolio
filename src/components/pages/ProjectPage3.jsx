import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const ProjectPage3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id= "project-page" className="project-page">
      <h1 className="fade-in">Biometric Attendance Management System With Door Lock</h1>
      <br/>
      <div className="project-details fade-in">
        <section>
          <h2>Description</h2>
          <p>
            The Biometric Attendance Management System with Door Lock is a robust solution designed to enhance attendance tracking and access control. 
            Utilizing fingerprint recognition technology, it ensures accurate identification and prevents unauthorized access. 
            This project streamlines attendance management, maintains security, and reduces administrative tasks.
          </p>
        </section>
        <section>
          <h2>Project Overview</h2>
          <p>
            This system employs a fingerprint-operated door lock to authenticate individuals and log precise entry and exit times. 
            The data is stored in a centralized database, allowing administrators to export attendance records in Excel format for review. 
            It is ideal for educational institutions, corporate offices, and other secure environments.
          </p>
        </section>
        <section>
          <h2>Principle of Operation</h2>
          <p>
            The system operates on fingerprint authentication, granting access only to authorized individuals. 
            A time-limited mechanism locks the door after entry to prevent tailgating. Attendance details, 
            including name, ID, and timestamps, are recorded for both entry and exit.
          </p>
        </section>
        <section>
          <h2>System Design and Features</h2>
          <ul>
            <li><strong>Fingerprint Scanner:</strong> Captures and verifies fingerprints.</li>
            <li><strong>Microcontroller:</strong> Processes data and controls the electric door lock.</li>
            <li><strong>Electric Door Lock:</strong> Operates based on successful authentication.</li>
            <li><strong>LCD Display:</strong> Displays status messages such as "Access Granted" or "Access Denied."</li>
            <li><strong>Attendance Logging:</strong> Records user details and timestamps in a database, exportable in Excel format.</li>
            <li><strong>Buzzer Alert:</strong> Triggers in case of unauthorized access attempts.</li>
          </ul>
        </section>
        <section>
          <h2>Applications</h2>
          <ul>
            <li><strong>Educational Institutions:</strong> Automates attendance and secures classrooms, labs, and libraries.</li>
            <li><strong>Corporate Offices:</strong> Tracks employee attendance and manages access to restricted areas.</li>
            <li><strong>Restricted Facilities:</strong> Provides secure access to research labs, data centers, and healthcare facilities.</li>
          </ul>
        </section>
        <section>
          <h2>Benefits</h2>
          <ul>
            <li><strong>Enhanced Security:</strong> Prevents unauthorized access and ensures safety.</li>
            <li><strong>Automation:</strong> Eliminates manual attendance processes.</li>
            <li><strong>Accurate Tracking:</strong> Logs precise entry and exit times.</li>
            <li><strong>Time and Resource Efficiency:</strong> Reduces human intervention and administrative workload.</li>
            <li><strong>Data Management:</strong> Simplifies record-keeping with exportable reports.</li>
          </ul>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            The Biometric Attendance Management System with Door Lock is a cost-effective and reliable solution for modern-day access control and attendance management needs. 
            Its scalability and functionality make it suitable for diverse applications across industries.
          </p>
        </section>
      </div>
      <br/>
      <div className="home-link">
        <Link to="/" className="home-button fade-in">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProjectPage3;
