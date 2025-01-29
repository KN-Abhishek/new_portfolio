import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/education')
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) => console.error('Error fetching education data:', error));
  }, []);

  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>My Background</h1>
      </div>
      <div className="education-section">
        {educationData.map((education) => (
          <div key={education.id} className="education-card">
            <h2>{education.degree}</h2>
            <p><strong>Institution:</strong> {education.institution}</p>
            <p><strong>Year:</strong> {education.year}</p>
            <p><strong>Details:</strong> {education.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
