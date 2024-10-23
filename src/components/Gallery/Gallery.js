// src/components/Gallery/Gallery.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Gallery.css';

const Gallery = () => {
  // List of image file names
  const galleryImages = [
    '1.jpg',
    'ayodhya.webp',
    'baranti.webp',
    'flower.jpg',
    'large.jpg',
    'mithonDam.webp',
    'out.jpg',
    'palash.webp',
    'recep.jpg',
    'room1.jpg',
    'service.jpg',
    'small.jpg'
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <Carousel>
        {galleryImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/${image}`)} // Use the correct path to load images
              alt={`Gallery ${index + 1}`} // Provide alt text for accessibility
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
