import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Kingsukh Guest House</h1>
        <p className="hero-subtitle">Make Yourself At Home
        In Our Guest House.</p>
        <a href="#booking" className="hero-button">Book Now</a>
      </div>
    </div>
  );
};

export default Hero;
