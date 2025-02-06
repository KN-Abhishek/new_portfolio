import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EducationDashboard.css';
import home from './assets/home5.png';
import about from './assets/about5.png';
import education from './assets/graduation.png';
import project from './assets/project5.png';
import user from './assets/user5.png';
import contact from './assets/contact5.png';
import Logout from './Logout'; 

const API_URL = "http://localhost:8080/api/education";

const EducationDashboard = () => {
  const [educationList, setEducationList] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    degree: '',
    institution: '',
    year: '',
    details: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setEducationList(data);
    } catch (error) {
      console.error("Error fetching education records:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST" ;
      const url = isEditing ? `${API_URL}/${formData.id}` : API_URL;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Network response was not ok");
      setFormData({ id: null, degree: '', institution: '', year: '', details: '' });
      setIsEditing(false);
      fetchEducation();
    } catch (error) {
      console.error("Error saving education record:", error);
    }
  };

  const handleEdit = (education) => {
    setFormData(education);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Network response was not ok");
  
      fetchEducation();
    } catch (error) {
      console.error("Error deleting education record:", error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "visible" : ""}`}>
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

      {/* Main Content */}
      <div className="dashboard-content">
        <h2>Education Dashboard</h2>
        <form onSubmit={handleSubmit} className="education-form">
          <input type="text" name="degree" placeholder="Degree" value={formData.degree} onChange={handleChange} required />
          <input type="text" name="institution" placeholder="Institution" value={formData.institution} onChange={handleChange} required />
          <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
          <textarea name="details" placeholder="Details" value={formData.details} onChange={handleChange} required />
          <button className="education-form-button" type="submit">{isEditing ? "Update Education" : "Add Education"}</button>
        </form>
        <div className="education-table-container">
        <table className="education-table">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Institution</th>
              <th>Year</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {educationList.map((education) => (
              <tr key={education.id}>
                <td>{education.degree}</td>
                <td>{education.institution}</td>
                <td>{education.year}</td>
                <td>{education.details}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(education)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(education.id)}>Delete</button>
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

export default EducationDashboard;
