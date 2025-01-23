import React from 'react';
import './Education.css';
import themepic from '../../assets/theme_pattern.svg';

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>My Education</h1>
        <img src={themepic} alt="Theme Pattern" />
      </div>
      <div className="education-section">
        <div className="education-card">
          <h2>10th Standard</h2>
          <p><strong>School:</strong> Kendriya Vidyalaya Ottapalam</p>
          <p><strong>Year:</strong> 2017</p>
          <p><strong>Percentage:</strong> 95%</p>
        </div>
        <div className="education-card">
          <h2>12th Standard</h2>
          <p><strong>School:</strong> Kendriya Vidyalaya Ottapalam</p>
          <p><strong>Year:</strong> 2019</p>
          <p><strong>Percentage:</strong> 92.3%</p>
        </div>
        <div className="education-card">
          <h2>Bachelor of Technology (BTech)</h2>
          <p><strong>College:</strong> NSS College Of Engineering</p>
          <p><strong>Branch:</strong> Electronics and Communication Engineering</p>
          <p><strong>Year:</strong> 2020</p>
          <p><strong>CGPA:</strong> 8.43</p>
        </div>
      </div>
    </div>
  );
};

export default Education;