import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoutIcon from './assets/log.png';
import './Logout.css'; // Import styling

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login flag
    navigate('/login'); // Redirect to login page
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      <img src={logoutIcon} alt="Logout" className="logout-icon" />
    </button>
  );
};

export default Logout;
