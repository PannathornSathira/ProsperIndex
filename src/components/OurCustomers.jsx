import React from 'react';
import './OurCustomers.css';
import bangkokHostpital from '../assets/CustomerRef/Bangkok.jpg';
import CNMI from '../assets/CustomerRef/CNMI_logo.png';
import Samitivej from '../assets/CustomerRef/Samitivej.png';
import Sukumvit from '../assets/CustomerRef/Sukumvit.png';
import  Vichaiyut from '../assets/CustomerRef/Vichaiyut.png';
import BNH from '../assets/CustomerRef/BNH.png';
const OurCustomers = () => {
  // Placeholder data for customers
  // In a real application, these would be image URLs
  const customers = [
    { id: 1, name: "Bangkok Hospital", logo: bangkokHostpital },
    { id: 2, name: "CNMI Hospital", logo: CNMI },
    { id: 3, name: "Samitivej Hospital", logo: Samitivej },
    { id: 4, name: "Sukumvit Hospital", logo: Sukumvit },
    { id: 5, name: "Vichaiyut Hospital", logo: Vichaiyut },
    { id: 6, name: "BNH Hospital", logo: BNH }
  ];

  return (
    <section className="our-customers-section">
      <div className="container">
        <h2 className="section-title">Our Customers</h2>
        <p className="section-subtitle">Trusted by industry leaders in renewable energy and engineering.</p>
        
        <div className="customers-grid">
          {customers.map((customer) => (
            <div key={customer.id} className="customer-card">
              <img 
                src={customer.logo} 
                alt={`${customer.name} logo`} 
                className="customer-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
