import React, { useEffect, useState } from 'react';
import { getUserById } from '../services/userService';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserById(id);
      setUser(response.data);
    };

    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Detail</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add other user details */}
    </div>
  );
};

export default UserDetail;
