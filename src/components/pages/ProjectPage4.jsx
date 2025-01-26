import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const ProjectPage4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id= "project-page" className="project-page">
      <h1 className="fade-in">Water Level Controller Using 8051 Microcontroller</h1>
      <br/>
      <div className="project-details fade-in">
        <section>
          <h2>Description</h2>
          <p>
            The Water Level Controller project using the 8051 microcontroller is designed to automatically monitor and regulate the water level in a tank or reservoir. 
            This project provides a smart solution for water management, which is essential in various scenarios, including domestic, industrial, and agricultural settings. 
            The system optimizes the process of filling or emptying water tanks, ensuring efficient use of water resources while preventing overflow and dry running of pumps.
          </p>
        </section>
        <section>
          <h2>Project Overview</h2>
          <p>
            The system employs the 8051 microcontroller as the central processing unit, interacting with water level sensors placed at different heights in the tank. 
            These sensors detect the water level and send corresponding signals to the microcontroller. The microcontroller processes the data to control a water pump or valve, 
            ensuring the water level remains within a predefined range, thus preventing overflow and damage to the pump from dry running.
          </p>
        </section>
        <section>
          <h2>Principle of Operation</h2>
          <p>
            The system operates based on the principle that water is a good conductor of electricity. Four conductive wires, acting as sensors, are dipped into the water at varying heights.
            These wires detect the presence of water and correspond to specific levels:
          </p>
          <ul>
            <li><strong>Low Level:</strong> Triggers the motor to fill the tank when water is low.</li>
            <li><strong>Half Level:</strong> Indicates the halfway water level, keeping the motor running.</li>
            <li><strong>Full Level:</strong> Stops the motor to prevent overflow when the tank is full.</li>
          </ul>
        </section>
        <section>
          <h2>System Design and Features</h2>
          <p>
            The system integrates the following components:
          </p>
          <ul>
            <li><strong>Water Level Sensors:</strong> Four conductive wires detect water levels in the tank.</li>
            <li><strong>Microcontroller (8051):</strong> Processes data from sensors to control the motor.</li>
            <li><strong>LCD Display:</strong> Displays real-time water level messages such as "LOW," "HALF," and "FULL."</li>
            <li><strong>Water Pump/Valve:</strong> Automatically operates to maintain the tank’s water level.</li>
          </ul>
        </section>
        <section>
          <h2>Applications</h2>
          <p>This system is ideal for:</p>
          <ul>
            <li>Residential water tank management.</li>
            <li>Industrial water reservoir control.</li>
            <li>Efficient irrigation in agriculture.</li>
            <li>Water treatment plants.</li>
          </ul>
        </section>
        <section>
          <h2>Benefits</h2>
          <p>Benefits include:</p>
          <ul>
            <li>Reduced human intervention in water management.</li>
            <li>Efficient resource management.</li>
            <li>Protection for pumps from dry running.</li>
          </ul>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            The Water Level Controller using the 8051 microcontroller is an effective, automated solution for water management. It ensures optimal use of water resources and simplifies water level regulation in various settings.
          </p>
        </section>
      </div>
      <br/>
      <div className="home-link">
        <Link to="/" className="home-button fade-in">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProjectPage4;
