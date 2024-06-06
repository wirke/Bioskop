import React from 'react';
import { deleteUser } from '../services/userService';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const { id } = useParams();
  const history = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      alert('User deleted successfully');
      history.push('/');
    } catch (error) {
      console.error(error);
      alert('Error deleting user');
    }
  };

  return (
    <div>
      <h1>Delete User</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteUser;
