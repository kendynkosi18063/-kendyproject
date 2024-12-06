import React from 'react';
import '../components/navbar.css'
// import {logo} from '../assets/logo.jpeg'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Lady Kay's Stationery Company</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
    <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/ShoppingList">ShoppingList</a></li>
        
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};



export default Navbar;