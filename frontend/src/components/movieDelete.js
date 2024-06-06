import React from 'react';
import { deleteMovie } from '../services/movieService';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteMovie = () => {
  const { id } = useParams();
  const history = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteMovie(id);
      alert('Movie deleted successfully');
      history.push('/'); // Redirect to movies list after deletion
    } catch (error) {
      console.error(error);
      alert('Error deleting movie');
    }
  };

  return (
    <div>
      <h1>Delete Movie</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteMovie;
