import React from 'react';
import './projects.css'; 

const ProjectPage2 = () => {
  return (
    <div className="project-page">
      <h1>Grievance Management System</h1>
      <div className="project-details">
        <p>
          <strong>Description:</strong> A web application to manage grievances with roles like User, Supervisor, and Assignee. Includes backend APIs and a React frontend.
          A web-based platform designed to streamline the process of lodging, tracking, and resolving grievances within an organization. The system enables users to submit complaints, which are then reviewed and assigned to supervisors or assignees for resolution. The platform ensures transparency, accountability, and timely handling of grievances, providing real-time updates and notifications to users. Developed using React.js for the frontend, Spring Boot for the backend, and PostgreSQL as the database, the system offers an efficient, user-friendly interface for all roles involved.
        </p>
        <p>
          <strong>Technologies:</strong> React.js, Spring Boot, PostgreSQL
        </p>
      </div>
    </div>
  );
};

export default ProjectPage2;
