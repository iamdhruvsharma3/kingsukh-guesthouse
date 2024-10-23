import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Booking details:', formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Book Your Stay</h2>
      <input 
        type="text" 
        name="name" 
        placeholder="Full Name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email Address" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="date" 
        name="checkIn" 
        value={formData.checkIn} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="date" 
        name="checkOut" 
        value={formData.checkOut} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="guests" 
        placeholder="Number of Guests" 
        value={formData.guests} 
        onChange={handleChange} 
        min="1" 
        required 
      />
      <button type="submit" className="submit-button">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
