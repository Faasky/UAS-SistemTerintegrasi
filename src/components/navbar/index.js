import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Movie Booking</h1>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/landing">Movies</Link></li>
        <li><Link to="/booking">Book Now</Link></li>
        <li><Link to="/mybooking">My Bookings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
