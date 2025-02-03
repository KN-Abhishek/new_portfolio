import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import home from './assets/home.png';
import about from './assets/about.png';
import education from './assets/education.png';
import projects from './assets/project.png';
import user from './assets/user.png';
import contact from './assets/contact.png';
import Logout from './Logout'; // Import Logout Component

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src="/LOGO-r.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/home"><img src={home} alt="Home" className="sidebar-icon" /> Home</Link></li>
          <li><Link to="/about"><img src={about} alt="About" className="sidebar-icon" /> About</Link></li>
          <li><Link to="/education"><img src={education} alt="Education" className="sidebar-icon" /> Education</Link></li>
          <li><Link to="/projects"><img src={projects} alt="Projects" className="sidebar-icon" /> Projects</Link></li>
          <li><Link to="/contact"><img src={contact} alt="Contact" className="sidebar-icon" /> Contact</Link></li>
          <li><Link to="/users"><img src={user} alt="Users" className="sidebar-icon" /> Users</Link></li>
        </ul>
        
        {/* Logout Button */}
        <div className="logout-container">
          <Logout />
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <div className="content-details">
          <p>Hello, Welcome To Your Dashboard.</p>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Abhishek Portfolio.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
