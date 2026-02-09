import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Filter, Zap, Sun, Flame, Shield, ArrowRight } from 'lucide-react';
import './Product.css';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Products' },
    { id: 'Solar', label: 'Solar Energy', icon: <Sun size={18} /> },
    { id: 'Electrical', label: 'Electrical Protection', icon: <Zap size={18} /> },
    { id: 'Safety', label: 'Fire Safety', icon: <Flame size={18} /> },
    { id: 'Security', label: 'Security Systems', icon: <Shield size={18} /> },
  ];

  const products = [
    {
      id: 1,
      category: 'Solar',
      title: 'Monocrystalline Solar Panels',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'High-efficiency panels suitable for commercial and industrial rooftop installations.',
    },
    {
      id: 2,
      category: 'Electrical',
      title: 'Industrial Voltage Stabilizer',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Heavy-duty voltage regulation to protect sensitive machinery from power fluctuations.',
    },
    {
      id: 3,
      category: 'Solar',
      title: 'Hybrid Solar Inverter',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Smart inverter system capable of managing grid and battery power seamlessly.',
    },
    {
      id: 4,
      category: 'Safety',
      title: 'Intelligent Fire Control Panel',
      image: 'https://images.unsplash.com/photo-1615818987391-f925c14d9dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Addressable fire alarm control panel for large-scale building safety management.',
    },
    {
      id: 5,
      category: 'Security',
      title: '4K IP Dome Camera',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'High-resolution surveillance camera with night vision and AI motion detection.',
    },
    {
      id: 6,
      category: 'Electrical',
      title: 'Surge Protection Device (SPD)',
      image: 'https://plus.unsplash.com/premium_photo-1678837862665-de823d069c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Type 1+2 surge protector for main power distribution boards.',
    },
     {
      id: 7,
      category: 'Safety',
      title: 'Smoke & Heat Detector',
      image: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Dual-sensor detector for early fire warning and reliability.',
    },
    {
      id: 8,
      category: 'Security',
      title: 'Biometric Access Control',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Fingerprint and facial recognition terminal for secure entry management.',
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="product-page">
      <Header />
      
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
             <h1>Product Catalog</h1>
             <p>Premium specialized equipment for energy, safety, and security.</p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="section product-section">
        <div className="container">
          
          {/* Filters */}
          <div className="filter-container">
            <div className="filter-scroll">
              {categories.map((cat) => (
                <button 
                  key={cat.id} 
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.icon && <span className="filter-icon">{cat.icon}</span>}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <div className="product-overlay">
                    <button className="btn-view-details">Request Quote</button>
                  </div>
                </div>
                <div className="product-details">
                  <span className={`product-category ${product.category.toLowerCase()}`}>{product.category}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
               <p>No products selling in this category.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
