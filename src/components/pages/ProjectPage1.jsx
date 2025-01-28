import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './projects.css'; 

const ProjectPage1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="project-page" className="project-page">
      <h1 className="fade-in">Portfolio Website</h1>
      <br />
      <div className="project-details">
        <section>
          <h2>Description</h2>
          <p>
            This personal portfolio website showcases my skills, projects, and achievements. Built with <strong>React.js</strong>, styled with custom CSS, and fully responsive, the website highlights my expertise in frontend development, UI/UX design, and web performance optimization.
          </p>
        </section>

        <section>
          <h2>Technologies</h2>
          <p>
            <strong>Frontend:</strong> React.js, CSS, JavaScript<br />
            <strong>Design:</strong> Figma (for wireframing and design mockups)<br />
            <strong>Version Control:</strong> Git, GitHub
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li><strong>Responsive Design:</strong> Optimized for desktop, tablet, and mobile screens.</li>
            <li><strong>Interactive Elements:</strong> Hover effects, animations, and a user-friendly layout.</li>
            <li><strong>Dynamic Navigation:</strong> Single-page application powered by React Router.</li>
            <li><strong>Projects Section:</strong> Detailed view of each project, including live demo links and GitHub repositories.</li>
            <li><strong>Contact Form:</strong> Integrated form for visitors to reach out easily.</li>
          </ul>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            This portfolio website serves as an interactive resume, showcasing my technical skills, projects, and achievements. It’s a powerful tool for personal branding and demonstrates my ability to create modern, responsive, and optimized web applications.
          </p>
        </section>
      </div>

      <br />
      <div className="home-link">
        <Link to="/projects" className="home-button">Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectPage1;
