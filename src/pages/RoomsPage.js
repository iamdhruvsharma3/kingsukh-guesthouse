import React from 'react';
import RoomCard from '../components/RoomCard/RoomCard';
import BookingForm from '../components/BookingForm/BookingForm';
import Testimonials from '../components/Testimonials/Testimonials';
import ContactForm from '../components/ContactForm/ContactForm';
import smallImage from '../assets/images/small.jpg'
import largeImage from '../assets/images/large.jpg'
import './RoomsPage.css';

const rooms = [
  {
    title: 'Cozy Heaven Room',
    description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
    price: 1000,
    imageUrl: smallImage
  },
  {
    title: 'Spacious Serenity Suite',
    description: 'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
    price: 1500,
    imageUrl: largeImage
  }
];

const RoomsPage = () => {
  return (
    <div className="rooms-page">
      <h2 className="page-title">Our Rooms</h2>
      <div className="rooms-list">
      <div className="room-cards-container">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
        </div>
      </div>
      {/* <BookingForm />
      <Testimonials /> */}
       <div className="booking-testimonials-container">
        <BookingForm />
        <Testimonials />
      </div>
      <ContactForm />
    </div>
  );
};

export default RoomsPage;
