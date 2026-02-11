import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Filter, Zap, Sun, Flame, Shield, ArrowRight } from 'lucide-react';
import './Product.css';
import TandaImg from '../assets/TANDAFA.jpg';
import NotifierImg from '../assets/Notify_honeywell.png';
import HikvisionImg from '../assets/Hikvision-CCTV-Access-Control.jpg';
import FiremanImg from '../assets/Fire-Man.png';
import UPSImg from '../assets/UPS-BESTA.png';
import LightProtectionImg from '../assets/Lighting-Protection.png';
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
      category: 'Security',
      title: 'Hikvision CCTV & Access Control',
      image: HikvisionImg,
      description: 'Comprehensive security solutions including IP cameras, DVRs, NVRs, and biometric access control systems.',
    },
    {
      id: 2,
      category: 'Safety',
      title: 'Notifier by Honeywell',
      image: NotifierImg,
      description: 'Advanced fire detection and alarm systems, featuring intelligent control panels and diverse peripheral devices.',
    },
    {
      id: 3,
      category: 'Safety',
      title: 'Tanda Fire Alarm System',
      image: TandaImg,
      description: 'Reliable fire alarm solutions with a wide range of detectors, control panels, and notification appliances.',
    },
    {
      id: 4,
      category: 'Safety',
      title: 'Fireman Telephone System',
      image: FiremanImg,
      description: 'Dedicated communication systems for emergency responders, ensuring clear and reliable coordination during incidents.',
    },
    {
      id: 5,
      category: 'Electrical',
      title: 'Bakiral UPS',
      image: UPSImg,
      description: 'High-performance Uninterruptible Power Supplies (UPS) ensuring continuous power for critical applications.',
    },
    {
      id: 6,
      category: 'Electrical',
      title: 'Lighting Protector',
      image: LightProtectionImg,
      description: 'Robust surge protection devices to safeguard electrical equipment from voltage spikes and lightning.',
    },
    {
      id: 7,
      category: 'Solar',
      title: 'Solar Energy Solutions',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete solar power systems including panels and inverters for sustainable energy generation.',
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
