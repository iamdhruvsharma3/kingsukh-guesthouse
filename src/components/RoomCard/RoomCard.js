import React from 'react';
import './RoomCard.css';

const RoomCard = ({ room }) => {
  const { title, description, price, imageUrl } = room;

  return (
    <div className="room-card">
      <img src={imageUrl} alt={title} className="room-image" />
      <div className="room-info">
        <h3 className="room-title">{title}</h3>
        <p className="room-description">{description}</p>
        <div className="room-footer">
          <span className="room-price">Rs. {price} / night</span>
          <a href="#booking" className="room-button">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
