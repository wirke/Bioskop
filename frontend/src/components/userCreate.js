import React, { useState } from 'react';
import { createUser } from '../services/userService';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ username, email, password });
      alert('User created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create User</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateUser;
