import React from 'react';
import Button from './Button';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img src={heroBg} alt="Engineers working on solar panels" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions">
          <Button variant="accent" size="large" onClick={() => window.location.href='/about'}>
            {t('hero.btnContact')} <ArrowRight size={20} />
          </Button>
          <Button variant="secondary" size="large" onClick={() => window.location.href='/service'}>
            {t('hero.btnServices')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
