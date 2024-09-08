import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Showtimes = () => {
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    axios.get('/api/showtimes')
      .then(response => setShowtimes(response.data))
      .catch(error => console.error('Error fetching showtimes:', error));
  }, []);

  return (
    <div>
      <h1>Showtimes</h1>
      <ul>
        {showtimes.map(showtime => (
          <li key={showtime._id}>
            <p>Movie ID: {showtime.movieId}</p>
            <p>Theatre ID: {showtime.theatreId}</p>
            <p>Start Date: {new Date(showtime.startDate).toLocaleString()}</p>
            <p>End Date: {new Date(showtime.endDate).toLocaleString()}</p>
            <p>Ticket Price: ${showtime.ticketPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Showtimes;
