import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../services/movieService';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getAllMovies();
        setMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
