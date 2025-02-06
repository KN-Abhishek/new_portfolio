import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import home1 from './assets/port3.jpg';
import about from './assets/about2.png';
import education from './assets/ed2.png';
import projects from './assets/proj2.png';
import user from './assets/user1.png';
import contact from './assets/contact2.png';
import Logout from './Logout'; // Import Logout Component
import profilePic from './assets/profilepic1.png';
import home5 from './assets/home5.png';
import about5 from './assets/about5.png';
import education5 from './assets/graduation.png';
import project5 from './assets/project5.png';
import user5 from './assets/user5.png';
import contact5 from './assets/contact5.png'; // Add the profile picture import

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
          <li><Link to="/home"><img src={home5} alt="Home" className="sidebar-icon" /> Home</Link></li>
          <li><Link to="/about"><img src={about5} alt="About" className="sidebar-icon" /> About</Link></li>
          <li><Link to="/education"><img src={education5} alt="Education" className="sidebar-icon" /> Education</Link></li>
          <li><Link to="/projects"><img src={project5} alt="Projects" className="sidebar-icon" /> Projects</Link></li>
          <li><Link to="/contact"><img src={contact5} alt="Contact" className="sidebar-icon" /> Contact</Link></li>
          <li><Link to="/users"><img src={user5} alt="Users" className="sidebar-icon" /> Users</Link></li>
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
          <p> Welcome Back</p>

          {/* Profile Picture */}
          <div className="profile-picture">
            <img src={profilePic} alt="Profile" className="profile-img" />
          </div>
        </div>

        {/* Dashboard Cards Section */}
        <div className="dashboard-cards">
          <Link to="/" className="card">
            <img src={home1} alt="Home" className="card-icon" />
            <h3>Portfolio</h3>
          </Link>
          <Link to="/about" className="card">
            <img src={about} alt="About" className="card-icon" />
            <h3>About</h3>
          </Link>
          <Link to="/education" className="card">
            <img src={education} alt="Education" className="card-icon" />
            <h3>Education</h3>
          </Link>
          <Link to="/projects" className="card">
            <img src={projects} alt="Projects" className="card-icon" />
            <h3>Projects</h3>
          </Link>
          <Link to="/contact" className="card">
            <img src={contact} alt="Contact" className="card-icon" />
            <h3>Contact</h3>
          </Link>
          <Link to="/users" className="card">
            <img src={user} alt="Users" className="card-icon" />
            <h3>Users</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
