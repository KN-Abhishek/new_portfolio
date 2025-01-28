import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
          </>
        } />

        
        <Route path="/projects" element={<Projects />} />

        
        <Route path="/project1" element={<ProjectPage1 />} />
        <Route path="/project2" element={<ProjectPage2 />} />
        <Route path="/project3" element={<ProjectPage3 />} />
        <Route path="/project4" element={<ProjectPage4 />} />
        <Route path="/project5" element={<ProjectPage5 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
