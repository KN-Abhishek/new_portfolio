import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SuccessMessage from './SuccessMessage';
import './ProjectsDashboard.css'; 
import home from './assets/home5.png';
import about from './assets/about5.png';
import education from './assets/graduation.png';
import project from './assets/project5.png';
import user from './assets/user5.png';
import contact from './assets/contact5.png';
import Logout from './Logout'; 
import "./SuccessMessage.css"; 

const API_URL = "http://localhost:8080/api/projects";

const ProjectsDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    description: '',
    technologies: '',
    features: '',
    applications: '',
    benefits: '',
    conclusion: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `${API_URL}/${formData.id}` : API_URL;

      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      
      setSuccessMessage(isEditing ? "Project updated successfully!" : "Project added successfully!");
      
      setFormData({ id: null, name: '', description: '', technologies: '', features: '', applications: '', benefits: '', conclusion: '' });
      setIsEditing(false);
      fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Network response was not ok");
      setSuccessMessage("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="dashboard-container">
      {successMessage && <SuccessMessage message={successMessage} onClose={() => setSuccessMessage(null)} />}
      
      <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
      
      <div className={`sidebar ${sidebarOpen ? "visible" : ""}`}>
        <div className="logo">
          <img src="/LOGO-r.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/home"><img src={home} alt="Home" className="sidebar-icon" />Home</Link></li>
          <li><Link to="/about"><img src={about} alt="About" className="sidebar-icon" />About</Link></li>
          <li><Link to="/education"><img src={education} alt="Education" className="sidebar-icon" />Education</Link></li>
          <li><Link to="/projects"><img src={project} alt="Projects" className="sidebar-icon" />Projects</Link></li>
          <li><Link to="/contact"><img src={contact} alt="Contact" className="sidebar-icon" />Contact</Link></li>
          <li><Link to="/users"><img src={user} alt="Users" className="sidebar-icon" />Users</Link></li>
        </ul>
        <div className="logout-container"><Logout /></div>
      </div>

      <div className="dashboard-content">
        <h2>Projects Dashboard</h2>

        <form onSubmit={handleSubmit} className="project-form">
          <input type="text" name="name" placeholder="Project Name" value={formData.name} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <textarea name="technologies" placeholder="Technologies" value={formData.technologies} onChange={handleChange} required />
          <textarea name="features" placeholder="Features" value={formData.features} onChange={handleChange} required />
          <textarea name="applications" placeholder="Applications" value={formData.applications} onChange={handleChange} required />
          <textarea name="benefits" placeholder="Benefits" value={formData.benefits} onChange={handleChange} required />
          <textarea name="conclusion" placeholder="Conclusion" value={formData.conclusion} onChange={handleChange} required />
          <button type="submit">{isEditing ? "Update Project" : "Add Project"}</button>
        </form>

        <div className="projects-table-container">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Technologies</th>
                <th>Features</th>
                <th>Applications</th>
                <th>Benefits</th>
                <th>Conclusion</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.technologies}</td>
                  <td>{project.features}</td>
                  <td>{project.applications}</td>
                  <td>{project.benefits}</td>
                  <td>{project.conclusion}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(project)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(project.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDashboard;
