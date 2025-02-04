import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContactDashboard.css';
import home from './assets/home2.png';
import about from './assets/about2.png';
import education from './assets/education2.png';
import project from './assets/proj2.png';
import user from './assets/users2.png';
import contact from './assets/contact2.png';
import Logout from './Logout';

const API_URL = "http://localhost:8080/api/contact";

const ContactDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    email: '',
    message: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
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
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      setFormData({ id: null, name: '', email: '', message: '' });
      setIsEditing(false);
      fetchContacts();
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Network response was not ok");
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setSidebarOpen(true)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "visible" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>
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
        <h2>Contact Dashboard</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">{isEditing ? "Update Contact" : "Add Contact"}</button>
        </form>

        {/* Contact List */}
        <div className="contacts-table-container">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button className="edit-btn" onClick={() => setIsEditing(true) || setFormData(contact)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(contact.id)}>Delete</button>
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

export default ContactDashboard;
