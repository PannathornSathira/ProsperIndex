import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Workflow from '../components/Workflow';
import Portfolio from '../components/Portfolio';
import Events from '../components/Events';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Workflow />
        <Portfolio />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
