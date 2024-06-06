import React, { useState, useEffect } from 'react';
import { getUserById, updateUser } from '../services/userService';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserById(id);
      setUsername(response.data.username);
      setEmail(response.data.email);
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, { username, email });
      alert('User updated successfully');
    } catch (error) {
      console.error(error);
      alert('Error updating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update User</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUser;
