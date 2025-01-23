import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects'; 
import ProjectPage1 from './components/pages/ProjectPage1';  
import ProjectPage2 from './components/pages/ProjectPage2';
import ProjectPage3 from './components/pages/ProjectPage3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Education />
        <Projects />
        
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/project1" element={<ProjectPage1 />} />
          <Route path="/project2" element={<ProjectPage2 />} />
          <Route path="/project3" element={<ProjectPage3 />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
