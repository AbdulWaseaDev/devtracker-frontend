import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home'; 
import Blog from './Pages/Blog';
import Profile from './Pages/Profile';
import Footer from './Components/Footer'; 
import Main from './Components/Main';

const NavScrollExample = () => {
  return (
    <Router>
      <Header /> 

      <Routes>
         <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
       <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default NavScrollExample;
