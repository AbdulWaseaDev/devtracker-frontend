import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'; 
import Home from './Components/Home'; 
import Blog from './Components/Blog';
import Header from './Components/Header';

const NavScrollExample = () => {
  return (
    <Router>
      <Header /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* You can add more routes like <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    <Home />
      <Footer />
    </Router>
  );
};

export default NavScrollExample;
