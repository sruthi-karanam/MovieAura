import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

