import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sun, Zap, Flame, Cctv, ArrowRight, ShieldCheck, HardHat, CheckCircle } from 'lucide-react';
import './Service.css';

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Green Energy (Solar)',
      icon: <Sun size={48} />,
      color: 'var(--color-accent-secondary)',
      description: 'Comprehensive solar energy solutions designed to reduce operational costs for hotels, businesses, and industrial facilities.',
      features: [
        'Free energy consultation & site analysis',
        'Customized solar panel system design',
        'Professional installation by certified engineers',
        'ROI analysis and performance monitoring'
      ]
    },
    {
      id: 2,
      title: 'Electrical Protection',
      icon: <Zap size={48} />,
      color: 'var(--color-primary)',
      description: 'Advanced protection systems to safeguard expensive medical and hotel equipment from power surges, voltage drops, and blackouts.',
      features: [
        'Voltage stabilization systems',
        'Surge protection device (SPD) installation',
        'UPS & backup power solutions',
        'Power quality analysis & auditing'
      ]
    },
    {
      id: 3,
      title: 'Fire & Life Safety',
      icon: <Flame size={48} />,
      color: 'var(--color-danger)',
      description: 'State-of-the-art fire detection and alarm systems installed and maintained in strict accordance with legal safety standards.',
      features: [
        'Fire alarm system design & installation',
        'Regular maintenance & safety inspections',
        'Emergency lighting & exit sign systems',
        'Compliance certification services'
      ]
    },
    {
      id: 4,
      title: 'CCTV & Access Control',
      icon: <Cctv size={48} />,
      color: 'var(--color-text-main)',
      description: 'High-security monitoring and access control solutions to ensure the safety of your premises, assets, and personnel.',
      features: [
        'HD & IP Camera surveillance systems',
        'Biometric & card access control',
        'Remote monitoring capabilities',
        'Integrated security management systems'
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
            <h1>Our Expert Services</h1>
            <p>Reliable, professional, and innovative engineering solutions tailored for your business success.</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section service-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Engineering Excellence You Can Trust</h2>
              <p>
                At ProsperIndex, we combine technical expertise with a commitment to quality. 
                Whether you need to cut energy costs, protect critical equipment, or ensure 
                safety compliance, our team of certified professionals is ready to deliver.
              </p>
              <ul className="intro-features">
                <li><ShieldCheck size={20} color="var(--color-primary)" /> Certified Professionals</li>
                <li><HardHat size={20} color="var(--color-primary)" /> Safety-First Approach</li>
                <li><CheckCircle size={20} color="var(--color-primary)" /> tailored Solutions</li>
              </ul>
            </div>
            <div className="intro-image-placeholder">
              {/* Placeholder for an actual image */}
              <div className="placeholder-box">
                <span>Engineering & Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-list" id="services-list">
        <div className="container">
          <div className="section-header text-center">
            <h2>Core Solutions</h2>
            <p>Specialized services designed for modern industrial and commercial needs.</p>
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
            <h2>Ready to Optimize Your Infrastructure?</h2>
            <p>Book a site survey today or consult with our experts to find the right solution for you.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Book a Site Survey</button>
              <button className="btn btn-outline">Contact an Expert</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;
