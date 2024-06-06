import React, { useState } from 'react';
import { createMovie } from '../services/movieService';

const CreateMovie = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMovie({ title, genre, description });
      alert('Movie created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating movie');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Movie</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateMovie;
