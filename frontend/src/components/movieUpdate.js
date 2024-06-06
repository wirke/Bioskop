import React, { useState, useEffect } from 'react';
import { getMovieById, updateMovie } from '../services/movieService';
import { useParams } from 'react-router-dom';

const UpdateMovie = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovieById(id);
      setTitle(response.data.title);
      setGenre(response.data.genre);
      setDescription(response.data.description);
    };

    fetchMovie();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMovie(id, { title, genre, description });
      alert('Movie updated successfully');
    } catch (error) {
      console.error(error);
      alert('Error updating movie');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Movie</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateMovie;
