import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Workflow from '../components/Workflow';
import Events from '../components/Events';
import OurCustomers from '../components/OurCustomers';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Workflow />
        <Events />
        <OurCustomers />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
