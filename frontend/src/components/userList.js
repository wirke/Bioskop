import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userService';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsers();
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
