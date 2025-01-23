import React from 'react';
import './projects.css'; 

const ProjectPage3 = () => {
  return (
    <div className="project-page">
      <h1>Biometric Attendance Management System With Door Lock</h1>
      <div className="project-details">
        <p>
          <strong>Description:</strong> The objective of the project is mainly to create an attendance management system to be implemented in the class. 
          The project aims to confirm the finger print of each student before allotting them to the class. Setting a time limit of few minutes for the student to enter the class, after which the entry will be locked . 
          A finger print operated door lock is to be implemented along with the system .The lock opens only when the correct detection of the enrolled finger print occurs. The timing of the lock is also to be adjusted such that not more than one person can enter. 
          The same system is implemented inside the class as well, so that to get out of the class also they have to scan the finger.
           The student scan timings (including date, time, ID and name)and details are to be uploaded in the excel format to the database.
        </p>
        <p>
          <strong>Technologies:</strong> Arduino IDE · Python (Programming Language) · C++ · 
        </p>
      </div>
    </div>
  );
};

export default ProjectPage3;
