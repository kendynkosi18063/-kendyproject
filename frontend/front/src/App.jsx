import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Blog from './components/blog.jsx';
import Home from './components/home.jsx';
import Contact from './components/contact.jsx';
import ShoppingList from './components/shoppinglist.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};


export default App
