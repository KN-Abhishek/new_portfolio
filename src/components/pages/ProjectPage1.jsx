import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './projects.css'; 

const ProjectPage1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id= "project-page" className="project-page">
      <h1 className="fade-in">Portfolio Website</h1>
      <br/>
      <div className="project-details fade-in">
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
          <h2>Principle of Operation</h2>
          <p>
            The website dynamically organizes content into sections such as Home, Skills, Projects, and Contact:
          </p>
          <ul>
            <li><strong>Home:</strong> Introductory section with a hero banner and brief overview of professional background.</li>
            <li><strong>Skills:</strong> Highlights technical expertise, tools, and frameworks used.</li>
            <li><strong>Projects:</strong> Features individual projects with details, live demos, and source code links.</li>
            <li><strong>Contact:</strong> Interactive form allowing visitors to get in touch for collaborations or opportunities.</li>
          </ul>
        </section>

        <section>
          <h2>System Design and Features</h2>
          <h3>Frontend (React.js)</h3>
          <ul>
            <li>React Router handles seamless navigation between sections.</li>
            <li>State management is achieved using React hooks.</li>
            <li>Modular components make the code reusable and maintainable.</li>
          </ul>
          <h3>Custom CSS</h3>
          <ul>
            <li>Flexbox and Grid ensure a clean, adaptable layout.</li>
            <li>Animations and hover effects enhance the user experience.</li>
          </ul>
          <h3>Performance Optimization</h3>
          <ul>
            <li>Images are lazy-loaded for faster performance.</li>
            <li>Code is bundled and minified to reduce load times.</li>
          </ul>
        </section>

        <section>
          <h2>Applications and Benefits</h2>
          <ul>
            <li><strong>Personal Branding:</strong> Establishes a professional online presence.</li>
            <li><strong>Showcase Skills:</strong> Highlights expertise in modern web development technologies.</li>
            <li><strong>Easy Updates:</strong> Easily add new projects and achievements as my career progresses.</li>
          </ul>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            This portfolio website serves as an interactive resume, showcasing my technical skills, projects, and achievements. It’s a powerful tool for personal branding and demonstrates my ability to create modern, responsive, and optimized web applications.
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

export default ProjectPage1;
