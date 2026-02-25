import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sun, Zap, Flame, Cctv, ArrowRight, ShieldCheck, HardHat, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Service.css';
import serviceEngineerImg from '../assets/service-engineer.png';

const Service = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('servicePage.list.s1.title'),
      icon: <Sun size={48} />,
      color: 'var(--color-accent-secondary)',
      description: t('servicePage.list.s1.desc'),
      features: [
        t('servicePage.list.s1.f1'),
        t('servicePage.list.s1.f2'),
        t('servicePage.list.s1.f3'),
        t('servicePage.list.s1.f4')
      ]
    },
    {
      id: 2,
      title: t('servicePage.list.s2.title'),
      icon: <Zap size={48} />,
      color: 'var(--color-primary)',
      description: t('servicePage.list.s2.desc'),
      features: [
        t('servicePage.list.s2.f1'),
        t('servicePage.list.s2.f2'),
        t('servicePage.list.s2.f3'),
        t('servicePage.list.s2.f4')
      ]
    },
    {
      id: 3,
      title: t('servicePage.list.s3.title'),
      icon: <Flame size={48} />,
      color: 'var(--color-danger)',
      description: t('servicePage.list.s3.desc'),
      features: [
        t('servicePage.list.s3.f1'),
        t('servicePage.list.s3.f2'),
        t('servicePage.list.s3.f3'),
        t('servicePage.list.s3.f4')
      ]
    },
    {
      id: 4,
      title: t('servicePage.list.s4.title'),
      icon: <Cctv size={48} />,
      color: 'var(--color-text-main)',
      description: t('servicePage.list.s4.desc'),
      features: [
        t('servicePage.list.s4.f1'),
        t('servicePage.list.s4.f2'),
        t('servicePage.list.s4.f3'),
        t('servicePage.list.s4.f4')
      ]
    }
  ];

  return (
    <div className="service-page">
      <Header />
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>{t('servicePage.heroTitle')}</h1>
            <p>{t('servicePage.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section service-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>{t('servicePage.introTitle')}</h2>
              <p>
                {t('servicePage.introDesc')}
              </p>
              <ul className="intro-features">
                <li><ShieldCheck size={20} color="var(--color-primary)" /> {t('servicePage.feature1')}</li>
                <li><HardHat size={20} color="var(--color-primary)" /> {t('servicePage.feature2')}</li>
                <li><CheckCircle size={20} color="var(--color-primary)" /> {t('servicePage.feature3')}</li>
              </ul>
            </div>
            <div className="intro-image-container">
              <img 
                src={serviceEngineerImg} 
                alt="ProsperIndex engineer installing fire alarm system" 
                className="intro-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-list" id="services-list">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('servicePage.coreTitle')}</h2>
            <p>{t('servicePage.coreSubtitle')}</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <span className="bullet" style={{ backgroundColor: service.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <button className="btn-learn-more" style={{ color: service.color }}>
                  Learn More <ArrowRight size={16} />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>{t('servicePage.ctaTitle')}</h2>
            <p>{t('servicePage.ctaSubtitle')}</p>
            <div className="cta-buttons">
              <a href="/about"><button className="btn btn-outline">{t('servicePage.btnContact')}</button></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;
