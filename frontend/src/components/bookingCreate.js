import React, { useState } from 'react';
import { createBooking } from '../services/bookingService';

const CreateBooking = () => {
  const [idUser, setIdUser] = useState('');
  const [idMovie, setIdMovie] = useState('');
  const [idScreening, setIdScreening] = useState('');
  const [reservedSeats, setReservedSeats] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking({ id_user: idUser, id_movie: idMovie, id_screening: idScreening, reserved_seats: reservedSeats });
      alert('Booking created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating booking');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Booking</h1>
      <input type="text" placeholder="User ID" value={idUser} onChange={(e) => setIdUser(e.target.value)} />
      <input type="text" placeholder="Movie ID" value={idMovie} onChange={(e) => setIdMovie(e.target.value)} />
      <input type="text" placeholder="Screening ID" value={idScreening} onChange={(e) => setIdScreening(e.target.value)} />
      <input type="text" placeholder="Reserved Seats" value={reservedSeats} onChange={(e) => setReservedSeats(e.target.value.split(',').map(seat => ({ seat })))} />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateBooking;
