import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Had an amazing stay! The service was exceptional and the rooms were spotless.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    feedback: 'Great experience! Beautiful hotel with friendly staff.',
    rating: 4,
  },
  // {
  //   name: 'Alice Johnson',
  //   feedback: 'Loved the ambiance and the amenities provided. Will definitely return!',
  //   rating: 5,
  // }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What Our Guests Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <p className="testimonial-rating">Rating: {testimonial.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
