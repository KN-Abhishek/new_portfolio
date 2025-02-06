import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import home from "./assets/home5.png";
import about from "./assets/about5.png";
import education from "./assets/graduation.png";
import project from "./assets/project5.png";
import userIcon from "./assets/user5.png";
import contact from "./assets/contact5.png";
import Logout from "./Logout";
import SuccessMessage from "./SuccessMessage";
import "./SuccessMessage.css";

const API_URL = "http://localhost:8080/api/users";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    username: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // ✅ Success message state
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Error message state

  // Assuming loggedInUserId is fetched from session or state (for example, from localStorage or Context)
  const loggedInUserId = JSON.parse(localStorage.getItem('user'))?.id || 1; // Replace with actual logged-in user ID logic

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if the username already exists
    const existingUser = users.find(user => user.username === formData.username);

    if (existingUser) {
      setErrorMessage("User already exists!"); // Show error if username already exists
      setTimeout(() => setErrorMessage(""), 3000); // Clear the error message after 3 seconds
      return;
    }

    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `${API_URL}/${formData.id}` : API_URL;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSuccessMessage(isEditing ? "User updated successfully!" : "User added successfully!"); 
      setFormData({ id: null, username: "", password: "" });
      setIsEditing(false);
      fetchUsers();
      
      setTimeout(() => setSuccessMessage(""), 3000); // Hide success message after 3 sec
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEdit = (user) => {
    setFormData({ id: user.id, username: user.username, password: "" });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    // Prevent deleting the logged-in user
    if (id === loggedInUserId) {
      setErrorMessage("You cannot delete the currently logged-in user!");
      setTimeout(() => setErrorMessage(""), 3000); // Hide error after 3 sec
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Network response was not ok");
      setSuccessMessage("User deleted successfully!");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src="/LOGO-r.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/home"><img src={home} alt="Home" className="sidebar-icon" /> Home</Link></li>
          <li><Link to="/about"><img src={about} alt="About" className="sidebar-icon" /> About</Link></li>
          <li><Link to="/education"><img src={education} alt="Education" className="sidebar-icon" /> Education</Link></li>
          <li><Link to="/projects"><img src={project} alt="Projects" className="sidebar-icon" /> Projects</Link></li>
          <li><Link to="/contact"><img src={contact} alt="Contact" className="sidebar-icon" /> Contact</Link></li>
          <li><Link to="/users"><img src={userIcon} alt="Users" className="sidebar-icon" /> Users</Link></li>
        </ul>
        <div className="logout-container">
          <Logout />
        </div>
      </div>

      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>

      <div className="dashboard-content">
        <h2>User Management</h2>

        {/* ✅ Success Message */}
        {successMessage && <SuccessMessage message={successMessage} onClose={() => setSuccessMessage("")} />}

        {/* ✅ Error Message */}
        {errorMessage && <div className="error">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="user-form">
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">{isEditing ? "Update User" : "Add User"}</button>
        </form>

        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
