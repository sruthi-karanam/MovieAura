import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Theatres = () => {
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    axios.get('/api/theatres')
      .then(response => setTheatres(response.data))
      .catch(error => console.error('Error fetching theatres:', error));
  }, []);

  return (
    <div>
      <h1>Theatres</h1>
      <ul>
        {theatres.map(theatre => (
          <li key={theatre._id}>
            <h2>{theatre.name}</h2>
            <p>{theatre.city}</p>
            <p>Ticket Price: ${theatre.ticketPrice}</p>
            <img src={theatre.image} alt={theatre.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theatres;
