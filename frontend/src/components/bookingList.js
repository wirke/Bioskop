import React, { useEffect, useState } from 'react';
import { getBookingsByUserId } from '../services/bookingService';
import { useParams } from 'react-router-dom';

const BookingsList = () => {
  const { userId } = useParams();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await getBookingsByUserId(userId);
      setBookings(response.data);
    };

    fetchBookings();
  }, [userId]);

  return (
    <div>
      <h1>Bookings List</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>{`Booking for movie ID: ${booking.id_movie}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
