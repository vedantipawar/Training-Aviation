import './About.css';
import React from 'react';
import CurrentDate from './CurrentDate';
import ProceduralTrainer from './ProceduralTrainer';

const sections = [
    {
      image: './images/Image1.png',
      title: 'Emergency Procedures',
      subtitle: 'some sub heading here',
      completion: 50,
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Pre-Flight Procedures',
      subtitle: 'some sub heading here',
      completion: 0,
    },
    {
      image: 'path/to/image3.jpg',
      title: 'CFI',
      subtitle: 'some sub heading here',
      completion: 100,
    },
    // Add more sections as needed
  ];
const About = () => {
    return (
        <div className='body'>
            <div className='title'>
                <CurrentDate/>
                <h1>Procedural Trainer</h1>
                <ProceduralTrainer sections={sections} />
            </div>
        </div>
    );
};

export default About;
