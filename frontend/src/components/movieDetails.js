import React, { useEffect, useState } from 'react';
import { getMovieById } from '../services/movieService';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovieById(id);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>Movie Detail</h1>
      <p>Title: {movie.title}</p>
      <p>Genre: {movie.genre}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
};

export default MovieDetail;
