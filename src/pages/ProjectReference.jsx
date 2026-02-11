import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProjectReference.css';
import refServer from '../assets/ProjectRef/ServiceMA.png';
import refCeiling from '../assets/ProjectRef/FAInstall2.png';
import refPump from '../assets/ProjectRef/Pump.png';
import refPanel from '../assets/ProjectRef/FAInstall.png';


const ProjectReference = () => {
  const projects = [
    {
      id: 1,
      title: 'Server Room Maintenance',
      description: 'Comprehensive preventative maintenance for critical data center infrastructure.',
      image: refServer
    },
    {
      id: 2,
      title: 'Fire Safety Installation',
      description: 'Installation of advanced smoke detection systems in commercial office complex.',
      image: refCeiling
    },
    {
      id: 3,
      title: 'Fire Pump System Maintenance',
      description: 'Regular testing and maintenance of high-capacity fire pump systems.',
      image: refPump
    },
    {
      id: 4,
      title: 'Electrical Panel Inspection',
      description: 'Thorough electrical safety inspection and thermographic scanning.',
      image: refPanel
    }
  ];

  return (
    <div className="project-reference-page">
      <Header />
      
      <section className="project-hero">
        <div className="container">
          <h1>Project References</h1>
          <p>Showcasing our expertise in engineering, installation, and maintenance across various industries.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectReference;
