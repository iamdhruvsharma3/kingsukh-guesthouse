// src/components/About/About.js
import React from 'react';
import './About.css';
import buildingImage from '../../assets/images/out.jpg'; // Import the image

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <img src={buildingImage} alt="Main Building" className="about-image" />
        <div className="about-text">
          <p className='about-text-main'>
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          <p className='about-text-address'>
            Our dedicated staff is committed to providing the best experience 
            possible, ensuring you have everything you need for a relaxing stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
