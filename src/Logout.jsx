import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Add styling for the button

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login flag
    navigate('/login'); // Redirect to login page
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
