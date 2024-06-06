import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './components/userList';
import UserDetail from './components/userDetails';
import CreateUser from './components/userCreate';
import UpdateUser from './components/userUpdate';
import DeleteUser from './components/userDelete';

import MoviesList from './components/movieList';
import MovieDetail from './components/movieDetails';
import CreateMovie from './components/movieCreate';
import UpdateMovie from './components/movieUpdate';
import DeleteMovie from './components/movieDelete';

import BookingsList from './components/bookingList';
import CreateBooking from './components/bookingCreate';
import HeaderComponent from './components/headerComponent';

//import AdminComponent from '.components/adminComponent'
//import HomeComponent from '.components/homeComponent'

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/users" element={<UsersList></UsersList>} />
        <Route path="/user/:id" element={<UserDetail></UserDetail>} />
        <Route path="/create-user" element={<CreateUser></CreateUser>} />
        <Route path="/update-user/:id" element={<UpdateUser></UpdateUser>} />
        <Route path="/delete-user/:id" element={<DeleteUser></DeleteUser>} />
        <Route path="/movies" element={<MoviesList></MoviesList>} />
        <Route path="/movie/:id" element={<MovieDetail></MovieDetail>} />
        <Route path="/create-movie" element={<CreateMovie></CreateMovie>} />
        <Route path="/update-movie/:id" element={<UpdateMovie></UpdateMovie>} />
        <Route path="/delete-movie/:id" element={<DeleteMovie></DeleteMovie>} />
        <Route path="/bookings/:userId" element={<BookingsList></BookingsList>} />
        <Route path="/create-booking" element={<CreateBooking></CreateBooking>} />
      </Routes>
    </Router>
  );
};

export default App;

//<Route path="/home" element={<HomeComponent></HomeComponent>}/>
//<Route path="/admin" element={<AdminComponent></AdminComponent>}/>