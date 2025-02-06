import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutDashboard.css';
import home from './assets/home5.png';
import about from './assets/about5.png';
import education from './assets/graduation.png';
import project from './assets/project5.png';
import user from './assets/user5.png';
import contact from './assets/contact5.png';
import Logout from './Logout'; 
import SuccessMessage from "./SuccessMessage"; 
import "./SuccessMessage.css"; 

const API_URL = "http://localhost:8080/api/about";

const AboutDashboard = () => {
  const [aboutList, setAboutList] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    description: '',
    skills: '',
    achievements: '',
    profileImage: null
  });
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setAboutList(data);
    } catch (error) {
      console.error("Error fetching about records:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'profileImage') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    let errors = {};

    // Validation for required fields
    if (!formData.description) errors.description = "Description is required";
    if (!formData.skills) errors.skills = "Skills are required";
    if (!formData.achievements) errors.achievements = "Achievements are required";

    // Validate the profile image if form is not in editing mode
    if (!formData.profileImage && !isEditing) {
      errors.profileImage = "Profile image is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if validation fails
    if (!validateForm()) return;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("description", formData.description);
      formDataToSend.append("skills", formData.skills);
      formDataToSend.append("achievements", formData.achievements);
      if (formData.profileImage) {
        formDataToSend.append("profileImage", formData.profileImage);
      }

      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `${API_URL}/${formData.id}` : API_URL;

      const response = await fetch(url, {
        method,
        body: formDataToSend
      });

      if (!response.ok) throw new Error("Network response was not ok");
      setSuccessMessage(isEditing ? "About updated successfully!" : "About added successfully!");
      setFormData({
        id: null,
        description: '',
        skills: '',
        achievements: '',
        profileImage: null
      });
      setIsEditing(false);
      fetchAbout();
    } catch (error) {
      console.error("Error saving about record:", error);
    }
  };

  const handleEdit = (about) => {
    setFormData(about);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Network response was not ok");
      setSuccessMessage("About deleted successfully!");
      fetchAbout();
    } catch (error) {
      console.error("Error deleting about record:", error);
    }
  };

  return (
    <div className="dashboard-container">
      {successMessage && <SuccessMessage message={successMessage} onClose={() => setSuccessMessage(null)} />}
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? '×' : '☰'}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "visible" : ""}`}>
        <div className="logo">
          <img src="/LOGO-r.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/home"><img src={home} alt="Home" className="sidebar-icon" /> Home</Link></li>
          <li><Link to="/about"><img src={about} alt="About" className="sidebar-icon" /> About</Link></li>
          <li><Link to="/education"><img src={education} alt="Education" className="sidebar-icon" /> Education</Link></li>
          <li><Link to="/projects"><img src={project} alt="Projects" className="sidebar-icon" /> Projects</Link></li>
          <li><Link to="/contact"><img src={contact} alt="Contact" className="sidebar-icon" /> Contact</Link></li>
          <li><Link to="/users"><img src={user} alt="Users" className="sidebar-icon" /> Users</Link></li>
        </ul>
        <div className="logout-container">
          <Logout />
        </div>
      </div>

      <div className="dashboard-content">
        <h2>About Dashboard</h2>
        <form onSubmit={handleSubmit} className="education-form">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}
          
          <textarea
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
          />
          {errors.skills && <span className="error">{errors.skills}</span>}
          
          <textarea
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleChange}
          />
          {errors.achievements && <span className="error">{errors.achievements}</span>}
          
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
          />
          {errors.profileImage && <span className="error">{errors.profileImage}</span>}
          
          <button type="submit">{isEditing ? "Update About" : "Add About"}</button>
        </form>

        <div className="about-table-container">
          <table className="education-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Skills</th>
                <th>Achievements</th>
                <th>Profile Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {aboutList.map((about) => (
                <tr key={about.id}>
                  <td>{about.description}</td>
                  <td>{about.skills}</td>
                  <td>{about.achievements}</td>
                  <td>
                    <img
                      src={`http://localhost:8080/api/about/${about.id}/image`}
                      alt="Profile"
                      width="50"
                    />
                  </td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(about)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(about.id)}>Delete</button>
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

export default AboutDashboard;
