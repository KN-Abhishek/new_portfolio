import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const ProjectPage5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id= "project-page" className="project-page">
      <h1 className="fade-in">Automatic Bus Transport System With Three Layer Safety Measures</h1>
      <br/>
      <div className="project-details">
        <section>
          <h2>Description</h2>
          <p>
            The Bus Automation System with Three-Layer Safety Measures aims to enhance the safety and efficiency of bus transportation by utilizing Arduino-based technology. 
            This system incorporates three layers of safety measures: speed monitoring, location tracking, and automated door shutters. 
            The system uses a GPS module to track its location, speed sensors, ultrasonic sensors, servo motors, LCD displays, LEDs, and buzzers integrated through the Arduino board.
            The project seeks to create a comprehensive solution for ensuring passenger safety and improving overall bus operation.
          </p>
        </section>
        <section>
          <h2>Project Overview</h2>
          <p>
            The system integrates a combination of hardware components to create a comprehensive solution for monitoring key aspects of bus operation. The three layers of safety implemented in the system are:
          </p>
          <ul>
            <li><strong>Speed Monitoring:</strong> Ensures the bus is traveling at safe speeds, triggering alerts or controlling the vehicle when exceeding the speed limit.</li>
            <li><strong>Location Tracking:</strong> Allows real-time tracking of the bus’s location using GPS, ensuring buses follow their designated routes and can be monitored remotely.</li>
            <li><strong>Automated Door Shutters:</strong> Controls the bus doors automatically, ensuring they are securely closed while the bus is in motion to prevent accidents.</li>
          </ul>
          <p>
            These features work together to safeguard passengers, the driver, and other road users while optimizing bus operational processes.
          </p>
        </section>
        <section>
          <h2>Principle of Operation</h2>
          <p>
            The system operates through the following key processes:
          </p>
          <ul>
            <li><strong>Speed Monitoring:</strong> Uses a speed sensor to monitor the bus’s speed. If the bus exceeds a pre-set speed limit, an alarm (like a buzzer or LED indicator) is triggered to alert the driver.</li>
            <li><strong>Location Tracking:</strong> A GPS module tracks the exact location of the bus in real-time. The data is displayed on an LCD, useful for fleet management and remote monitoring.</li>
            <li><strong>Automated Door Shutters:</strong> Ultrasonic sensors detect obstacles near the doors. If an obstruction is detected or the bus is in motion, a servo motor automatically closes the doors, preventing accidents.</li>
          </ul>
          <p>
            These processes work in parallel, ensuring the system continually checks and controls the bus’s speed, location, and door status without manual intervention.
          </p>
        </section>
        <section>
          <h2>System Design and Features</h2>
          <p>
            The system is built around the Arduino microcontroller, which controls all the components. Key components of the system include:
          </p>
          <ul>
            <li><strong>Speed Sensors:</strong> Measure the speed of the bus and send data to the Arduino board for analysis.</li>
            <li><strong>GPS Module:</strong> Tracks the location of the bus and provides real-time data for monitoring.</li>
            <li><strong>Ultrasonic Sensors:</strong> Detect objects near the doors and trigger automatic door closure when necessary.</li>
            <li><strong>Servo Motors:</strong> Control the opening and closing of the bus doors.</li>
            <li><strong>LCD Display:</strong> Displays the current location, speed, and the status of the doors.</li>
            <li><strong>LEDs and Buzzers:</strong> Indicate door status and alert the driver when the bus exceeds the speed limit.</li>
            <li><strong>Arduino Board:</strong> The central controller that processes sensor data and triggers corresponding actions.</li>
          </ul>
          <h3>Key Features:</h3>
          <ul>
            <li>Real-time location tracking using GPS.</li>
            <li>Speed monitoring with alerts when exceeding the speed limit.</li>
            <li>Automated door control using ultrasonic sensors and servo motors.</li>
            <li>Safety alerts via LEDs and buzzers when necessary.</li>
            <li>User-friendly interface with the LCD display to show current speed, location, and system status.</li>
          </ul>
        </section>
        <section>
          <h2>Applications and Benefits</h2>
          <h3>Applications:</h3>
          <ul>
            <li><strong>Public Transport:</strong> Ideal for public buses to ensure passenger safety while improving operational efficiency.</li>
            <li><strong>Fleet Management:</strong> Enables bus operators and fleet managers to monitor buses in real-time and ensure they are on schedule.</li>
            <li><strong>Educational Institutions or Private Bus Services:</strong> Improves student safety while traveling.</li>
            <li><strong>Autonomous Buses:</strong> This system can serve as a foundation for autonomous or semi-autonomous vehicles, where safety and automation are critical.</li>
          </ul>
          <h3>Benefits:</h3>
          <ul>
            <li><strong>Enhanced Safety:</strong> Prevents excessive speeds and ensures bus doors are securely closed, reducing accident risk.</li>
            <li><strong>Operational Efficiency:</strong> Real-time location tracking helps manage bus routes, improving efficiency.</li>
            <li><strong>Passenger Comfort:</strong> Automated door shutters prevent issues like door obstruction, improving safety and comfort.</li>
            <li><strong>Cost-Effective Monitoring:</strong> GPS and sensor integration enables cost-effective fleet monitoring.</li>
            <li><strong>Scalability:</strong> The system is scalable to work with multiple buses, providing centralized monitoring.</li>
            <li><strong>Easy Implementation:</strong> The use of Arduino makes this system easy to implement and customize for various buses.</li>
          </ul>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            The Bus Automation System with Three-Layer Safety Measures provides a comprehensive solution to enhance both safety and efficiency in bus operations. By integrating speed monitoring, location tracking, and automated door control, the system ensures passenger safety and optimizes bus performance. The flexibility and scalability of the system make it suitable for various transportation needs.
          </p>
          <p>
            This project provides hands-on experience with integrating sensors, GPS modules, motors, and displays to create a functional and efficient system while addressing safety concerns in public transportation.
          </p>
        </section>
        <section>
          <h2>Technologies</h2>
          <p>Arduino IDE, speed sensors, C++, GPS Tracking, Ultrasonics</p>
        </section>

      </div>
      <br/>
      <div className="home-link">
      <Link to="/projects" className="home-button">Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectPage5;
