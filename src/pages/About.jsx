import './About.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentDate from './CurrentDate';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './Image1.png';

const About = () => {
  const [courses, setCourses] = useState([]);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch courses data from the Flask backend
    axios.get('http://127.0.0.1:5000/api/courses')
      .then(response => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  useEffect(() => {
    // Fetch procedures data from the Flask backend
    axios.get('http://127.0.0.1:5000/api/procedures')
      .then(scoreresponse => {
        setScores(scoreresponse.data);
      })
      .catch(error => {
        console.error('There was an error fetching the procedures!', error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='body'>
      <div className='title'>
        <CurrentDate />
        <h1>Procedural Trainer</h1>
        <Carousel responsive={responsive}>
          {courses.map(course => (
            <div className="card" key={course.id}>
              <div className="image-container">
                <img src={image1} alt="Course Image" />
                <div className="completion">{course.completion}%</div>
                <div className="overlay">
                  <div className="card-title">{course.name}</div>
                  <div className="card-subtitle">some sub heading here</div>
                  
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <h1>Recent Procedures</h1>
        <Carousel responsive={responsive}>
            {scores.map(score => (
                <div className="card" key={score.id}>
                <div className="image-container">
                    <img src={image1} alt="Procedure Image" />
                    <div className="overlay">
                    <div className="card-title">{score.title}</div>
                    <div className="card-subtitle">some sub heading here</div>
                    <div className="completion">{score.stars}%</div>
                    </div>
                </div>
                </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
