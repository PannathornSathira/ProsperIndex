import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X, Calendar } from 'lucide-react';
import './ProjectReference.css';
import '../components/Events.css'; // Reuse modal styles
import { projects } from '../data/projectsData';

const ProjectReference = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Group by category to render sections
  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="project-reference-page">
      <Header />
      
      <section className="project-hero">
        <div className="container">
          <h1>Project References</h1>
          <p>Explore our extensive portfolio showcasing expertise in engineering, installation, and maintenance across various critical systems.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="project-filters">
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project List grouped by categories */}
          <div>
            {Object.keys(groupedProjects).map(category => (
              <div key={category} className="category-section">
                <h2 className="category-title">{category}</h2>
                <div className="project-grid">
                  {groupedProjects[category].map((project) => (
                    <div 
                      key={project.id} 
                      className="project-card" 
                      onClick={() => handleCardClick(project)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                      <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <span style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, marginTop: '10px', display: 'block' }}>View Gallery →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal View for Gallery */}
      {selectedProject && (
        <div className="event-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="event-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="event-modal-body">
              <div className="event-modal-header" style={{ marginTop: 0 }}>
                <span className="event-tag" style={{ display: 'inline-block', marginBottom: '10px' }}>{selectedProject.category}</span>
                <h2 className="event-modal-title">{selectedProject.title}</h2>
              </div>
              <p className="event-modal-description">{selectedProject.description}</p>
              
              <div className="project-modal-gallery">
                {selectedProject.gallery.map((imgSrc, index) => (
                  <img key={index} src={imgSrc} alt={`${selectedProject.title} gallery ${index + 1}`} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectReference;
