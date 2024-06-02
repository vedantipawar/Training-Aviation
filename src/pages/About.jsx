import './About.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentDate from './CurrentDate';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './Image1.png';
import { NavLink } from 'react-router-dom'; 
import { FaPaperPlane, FaStar } from "react-icons/fa";



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
  
  const StarsDisplay = ({ score, outOf = 3 }) => {
    const totalStars = Array(outOf).fill(0); // Create an array with a length equal to the max number of stars
  
    return (
      <div>
        {totalStars.map((_, index) => {
          if (index < score) {
            // If the current index is less than the score, render a filled star
            return <span key={index} className="star-filled">&#9733;</span>; // Filled star
          } else {
            // Otherwise, render an unfilled star
            return <span key={index} className="star-unfilled">&#9734;</span>; // Unfilled star
          }
        })}
      </div>
    );
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
                    <div class="icon-container">
                        <FaPaperPlane className="icon-ps" />
                        <FaStar className="icon-ps" />
                    </div>
                                    
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <h1>Recent Procedures</h1>
        <Carousel responsive={responsive}>
            {scores.map(score => (
                <NavLink to={`/procedure/${score.id}`} key={score.id} className="recent-procedures-card">
                <div className="recent-procedures-card" key={score.id}>                
                    <div className="recent-procedures-overlay">
                        <div className="recent-procedures-card-title">{score.title}</div>
                        <div className="rp-completion">
                            <StarsDisplay score={score.stars} />
                        </div>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
