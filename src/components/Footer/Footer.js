import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
        <p>Email: kkghosh0099@gmail.com</p>
        <p>Phone: +91 9007062180</p>
        <div className="social-media">
          <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/images/facebook.png')} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/instagram.png')} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/twitter.png')} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/youtube.png')} alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kingsukh Guesthouse. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
