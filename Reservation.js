import React, { useState } from 'react';
import axios from 'axios';

const Reservation = () => {
  const [reservation, setReservation] = useState({
    movieId: '',
    theatreId: '',
    date: '',
    startAt: '',
    seats: 1,
    orderId: '',
    ticketPrice: 0,
    total: 0,
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/reservations', reservation)
      .then(response => alert('Reservation made successfully'))
      .catch(error => console.error('Error making reservation:', error));
  };

  return (
    <div>
      <h1>Reservation</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for reservation */}
        <input type="text" name="movieId" placeholder="Movie ID" onChange={handleChange} required />
        <input type="text" name="theatreId" placeholder="Theatre ID" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="startAt" onChange={handleChange} required />
        <input type="number" name="seats" min="1" onChange={handleChange} required />
        <input type="text" name="orderId" placeholder="Order ID" onChange={handleChange} required />
        <input type="number" name="ticketPrice" min="0" onChange={handleChange} required />
        <input type="number" name="total" min="0" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
