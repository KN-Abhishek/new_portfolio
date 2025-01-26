import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>My Background</h1>
      </div>
      <div className="education-section">
        <div className='education-row'>
        <div className="education-card">
          <h2>Secondary Education</h2>
          <p><strong>School:</strong> Kendriya Vidyalaya Ottapalam</p>
          <p><strong>Year:</strong> 2017</p>
          <p><strong>Percentage:</strong> 95%</p>
        </div>
        <div className="education-card">
          <h2>Senior Secondary Education</h2>
          <p><strong>School:</strong> Kendriya Vidyalaya Ottapalam</p>
          <p><strong>Year:</strong> 2019</p>
          <p><strong>Percentage:</strong> 92.3%</p>
        </div>
        </div>
        <div className='education-btech'>
        <div className="education-card">
          <h2>Bachelor of Technology</h2>
          <p><strong>College:</strong> NSS College Of Engineering</p>
          <p><strong>Branch:</strong> Electronics and Communication Engineering</p>
          <p><strong>Year:</strong> 2024</p>
          <p><strong>CGPA:</strong> 8.43</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Education;