import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/LOGO.png';
import underline from '../../assets/nav_underline.svg';
import { useNavigate } from 'react-router-dom';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [Menu, SetMenu] = useState("home");
  const menuRef = useRef();
  const navigate = useNavigate();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleNavigation = (page, anchor = '') => {
    closeMenu();
    if (anchor) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      navigate(page);
    }
    SetMenu(anchor || page);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <p onClick={() => handleNavigation('/', 'home')}>Home</p>
          {Menu === "home" && <img src={underline} alt="" />}
        </li>
        <li>
          <p onClick={() => handleNavigation('/', 'about')}>About Me</p>
          {Menu === "about" && <img src={underline} alt="" />}
        </li>
        <li>
          <p onClick={() => handleNavigation('/', 'education')}>Education</p>
          {Menu === "education" && <img src={underline} alt="" />}
        </li>
        <li>
          <p onClick={() => handleNavigation('/', 'projects')}>Projects</p>
          {Menu === "projects" && <img src={underline} alt="" />}
        </li>
        <li>
          <p onClick={() => handleNavigation('/', 'contact')}>Contact</p>
          {Menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>
      <div className="nav-connect">
        <p onClick={() => handleNavigation('/login')}>LoginPage</p> {/* Navigate to LoginPage */}
      </div>
    </div>
  );
};

export default Navbar;
