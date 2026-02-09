import React from 'react';
import Button from './Button';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img src={heroBg} alt="Engineers working on solar panels" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Leaders in Electrical & Solar Systems</h1>
        <p className="hero-subtitle">
          Powering the future with sustainable energy solutions and industrial engineering excellence.
        </p>
        <div className="hero-actions">
          <Button variant="accent" size="large" onClick={() => window.location.href='/about'}>
            Contact Our Experts <ArrowRight size={20} />
          </Button>
          <Button variant="outline" size="large" onClick={() => window.location.href='/service'}>
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
