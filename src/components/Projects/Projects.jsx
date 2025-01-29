import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the backend
    fetch('http://localhost:8080/api/parent_projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-section">
        <div className="project-row">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h2>{project.heading}</h2>
              <p>
                <strong>Description:</strong> {project.description}
              </p>
              <p>
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <Link to={`/projects/${project.id}`} className="project-button">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
