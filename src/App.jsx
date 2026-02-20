import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import ProjectReference from './pages/ProjectReference';
import EventDetail from './pages/EventDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/projects" element={<ProjectReference />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
