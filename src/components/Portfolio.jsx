import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Green Energy', 'Fire Safety', 'CCTV', 'Electrical Protection'];

  const projects = [
    {
      id: 1,
      client: 'Phuket Marriott Resort',
      category: 'Green Energy',
      image: 'https://placehold.co/600x400/0047AB/FFF?text=Solar+Project',
      service: 'Solar Rooftop Installation 500kW',
    },
    {
      id: 2,
      client: 'Central Plaza Westgate',
      category: 'Fire Safety',
      image: 'https://placehold.co/600x400/D32F2F/FFF?text=Fire+Safety',
      service: 'Complete Fire Alarm System Upgrade',
    },
    {
      id: 3,
      client: 'Bangkok Hospital',
      category: 'Electrical Protection',
      image: 'https://placehold.co/600x400/FFD700/333?text=Electrical',
      service: 'Critical Power Backup Systems',
    },
    {
      id: 4,
      client: 'Siam Paragon',
      category: 'CCTV',
      image: 'https://placehold.co/600x400/333/FFF?text=CCTV',
      service: 'AI-Powered Security Surveillance',
    },
    {
      id: 5,
      client: 'Toyota Factory Gateway',
      category: 'Green Energy',
      image: 'https://placehold.co/600x400/4CAF50/FFF?text=Solar+Farm',
      service: 'Industrial Solar Farm - 2MW',
    },
    {
      id: 6,
      client: 'Icon Siam',
      category: 'Electrical Protection',
      image: 'https://placehold.co/600x400/0047AB/FFF?text=Lightning',
      service: 'Advanced Lightning Protection',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="portfolio-section section" id="projects">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">Delivering excellence across major industries.</p>
        </div>

        <div className="filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.client} loading="lazy" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">{project.category}</span>
                <h3 className="portfolio-client">{project.client}</h3>
                <p className="portfolio-service">{project.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
