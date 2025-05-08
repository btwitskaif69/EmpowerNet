// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SubmitStory from './pages/SubmitStory'; // Optional

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submit-story" element={<SubmitStory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
