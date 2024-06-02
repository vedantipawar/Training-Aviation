import './About.css';
import React from 'react';
import CurrentDate from './CurrentDate';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './Image1.png';
import image2 from './Image2.png';
import image3 from './Image3.png';




const About = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
                <CurrentDate/>
                <h1>Procedural Trainer 
            
                </h1>
                
                <Carousel responsive={responsive}>
                <div className="card">
                    <div className="image-container">
                        <img src={image1} alt="Emergency Procedures" />
                        <div className="overlay">
                            <div className="card-title">Emergency Procedures</div>
                            <div className="card-subtitle">some sub heading here</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={image2} alt="Emergency Procedures" />
                        <div className="overlay">
                            <div className="card-title">Emergency Procedures</div>
                            <div className="card-subtitle">some sub heading here</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={image1} alt="Emergency Procedures" />
                        <div className="overlay">
                            <div className="card-title">Emergency Procedures</div>
                            <div className="card-subtitle">some sub heading here</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={image2} alt="Emergency Procedures" />
                        <div className="overlay">
                            <div className="card-title">Emergency Procedures</div>
                            <div className="card-subtitle">some sub heading here</div>
                        </div>
                    </div>
                </div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
                                                
            </div>     
                   
        </div>
     
    );
};


export default About;
