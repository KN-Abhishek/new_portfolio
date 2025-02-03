import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Admin Dashboard Components
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import ProjectsDashboard from './ProjectsDashboard';
import EducationDashboard from './EducationDashboard';
import ContactDashboard from './ContactDashboard';
import AboutDashboard from './AboutDashboard';
import PrivateRoute from './PrivateRoute';
import UserDashboard from './UserDashboard';

// Portfolio Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import ProjectPage1 from './components/pages/ProjectPage1';
import ProjectPage2 from './components/pages/ProjectPage2';
import ProjectPage3 from './components/pages/ProjectPage3';
import ProjectPage4 from './components/pages/ProjectPage4';
import ProjectPage5 from './components/pages/ProjectPage5';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Panel Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Private Routes for Admin */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectsDashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/education" element={<EducationDashboard />} />
          <Route path="/contact" element={<ContactDashboard />} />
          <Route path="/about" element={<AboutDashboard />} />
          <Route path="/users" element={<UserDashboard />} />
        </Route>

        {/* Portfolio Routes */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        
        <Route path="/projects" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/projects/1" element={<ProjectPage1 />} />
        <Route path="/projects/2" element={<ProjectPage2 />} />
        <Route path="/projects/5" element={<ProjectPage3 />} />
        <Route path="/projects/4" element={<ProjectPage4 />} />
        <Route path="/projects/8" element={<ProjectPage5 />} />
      </Routes>
    </Router>
  );
};

export default App;
