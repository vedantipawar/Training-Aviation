import React from 'react';
import './ProceduralTrainer.css';

const ProceduralTrainer = ({ sections }) => {
  return (
    <div className="procedural-trainer">
      {sections.map((section, index) => (
        <div key={index} className="section-card">
          <img src={section.image} alt={section.title} className="section-image" />
          <div className="section-info">
            <h3>{section.title}</h3>
            <p>{section.subtitle}</p>
            <div className="completion">
              {section.completion}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProceduralTrainer;
