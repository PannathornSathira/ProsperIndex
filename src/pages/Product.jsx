import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Filter, Zap, Sun, Flame, Shield, ArrowRight, BatteryMedium } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Product.css';
import { productDetails } from '../data/productDetails';

// Dynamically load all product images from the assets directory
// eager: true ensures they are bundled immediately.
const imageModules = import.meta.glob('../assets/Products/**/*.{png,jpg,jpeg,svg,webp}', { eager: true });

// Parse the file paths into structured product objects
const products = Object.entries(imageModules).map(([path, module]) => {
  // Remove the prefix to get a clean path like: FireAlarm/Notifier/AddressableLoop/FA-A-B200S.png
  const relativePath = path.replace('../assets/Products/', '');
  const parts = relativePath.split('/');
  
  const category = parts[0];
  let brand = 'Default';
  let subcategory = 'Default';
  let filename = parts[parts.length - 1];
  
  // Categorize based on directory structure depth
  if (parts.length === 2) {
    brand = 'Default'; 
    subcategory = 'Default';
  } else if (parts.length === 3) {
    brand = parts[1];
    subcategory = 'Default';
  } else if (parts.length >= 4) {
    brand = parts[1];
    subcategory = parts[2];
  }

  // Remove the file extension for the title lookup (e.g., FA-A-B200S.png -> FA-A-B200S)
  const baseFilename = filename.split('.').slice(0, -1).join('.');
  
  // Look up specific details from our separate data file
  const detail = productDetails[baseFilename];

  return {
    id: path,
    category,
    brand,
    subcategory,
    title: detail?.name || baseFilename,
    description: detail?.description || 'Premium specialized equipment for your energy, safety, and security needs.',
    features: detail?.features || [],
    image: module.default,
  };
});

// Helper functions for UI presentability
const formatLabel = (str) => str.replace(/([A-Z])/g, ' $1').trim();

const getCategoryIcon = (catName) => {
  switch (catName) {
    case 'ElectricDevice': return <Zap size={18} />;
    case 'FireAlarm': return <Flame size={18} />;
    case 'SolarCell': return <Sun size={18} />;
    case 'UPS': return <BatteryMedium size={18} />;
    default: return <Filter size={18} />;
  }
};

const Product = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBrand, setActiveBrand] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');

  // Dynamically extract main categories
  const allCategories = useMemo(() => Array.from(new Set(products.map(p => p.category))), []);

  // Handle Level 1: Categories
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveBrand('All');
    setActiveSubcategory('All');
  };

  // Handle Level 2: Brands
  const handleBrandChange = (brand) => {
    setActiveBrand(brand);
    setActiveSubcategory('All');
  };

  // Filter 1: By Category
  const categoryProducts = useMemo(() => {
    return activeCategory === 'All' 
      ? products 
      : products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Derive Level 2: Available Brands
  const availableBrands = useMemo(() => {
    if (activeCategory === 'All') return [];
    const brandsSet = new Set(categoryProducts.map(p => p.brand));
    brandsSet.delete('Default'); // Default means no explicit brand subdirectory
    return Array.from(brandsSet).sort();
  }, [categoryProducts, activeCategory]);

  // Filter 2: By Brand
  const brandProducts = useMemo(() => {
    return activeBrand === 'All'
      ? categoryProducts
      : categoryProducts.filter(p => p.brand === activeBrand);
  }, [categoryProducts, activeBrand]);

  // Derive Level 3: Available Subcategories
  const availableSubcategories = useMemo(() => {
    if (activeCategory === 'All' || activeBrand === 'All') return [];
    const subSet = new Set(brandProducts.map(p => p.subcategory));
    subSet.delete('Default'); // Default means no subcategory directory
    return Array.from(subSet).sort();
  }, [brandProducts, activeCategory, activeBrand]);

  // Filter 3: Final Products (by Subcategory)
  const finalProducts = useMemo(() => {
    return activeSubcategory === 'All'
      ? brandProducts
      : brandProducts.filter(p => p.subcategory === activeSubcategory);
  }, [brandProducts, activeSubcategory]);

  return (
    <div className="product-page">
      <Header />
      
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
             <h1>{t('productPage.heroTitle')}</h1>
             <p>{t('productPage.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="section product-section">
        <div className="container">
          
          {/* Main Categories Tab Filter */}
          <div className="filter-container main-filters">
            <div className="filter-scroll">
              <button 
                className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('All')}
              >
                <span className="filter-icon"><Filter size={18} /></span>
                {t('productPage.allProducts')}
              </button>
              {allCategories.map((cat) => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  <span className="filter-icon">{getCategoryIcon(cat)}</span>
                  {formatLabel(cat)}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-Filters: Brands */}
          {availableBrands.length > 0 && (
            <div className="filter-container sub-filters">
              <div className="filter-scroll pill-scroll">
                <button 
                  className={`filter-pill ${activeBrand === 'All' ? 'active' : ''}`}
                  onClick={() => handleBrandChange('All')}
                >
                  {t('productPage.allBrands')}
                </button>
                {availableBrands.map((brand) => (
                  <button 
                    key={brand} 
                    className={`filter-pill ${activeBrand === brand ? 'active' : ''}`}
                    onClick={() => handleBrandChange(brand)}
                  >
                    {formatLabel(brand)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sub-Filters: Subcategories */}
          {availableSubcategories.length > 0 && (
            <div className="filter-container sub-filters">
              <div className="filter-scroll pill-scroll">
                <button 
                  className={`filter-pill ${activeSubcategory === 'All' ? 'active' : ''}`}
                  onClick={() => setActiveSubcategory('All')}
                >
                  {t('productPage.allCategories')}
                </button>
                {availableSubcategories.map((sub) => (
                  <button 
                    key={sub} 
                    className={`filter-pill ${activeSubcategory === sub ? 'active' : ''}`}
                    onClick={() => setActiveSubcategory(sub)}
                  >
                    {formatLabel(sub)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="product-grid">
            {finalProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                   <img src={product.image} alt={product.title} loading="lazy" />
                   <div className="product-overlay">
                     <button className="btn-view-details">{t('productPage.reqQuote')}</button>
                   </div>
                </div>
                <div className="product-details">
                  <div className="product-breadcrumbs">
                     <span className={`product-category ${product.category.toLowerCase()}`}>{formatLabel(product.category)}</span>
                     {product.brand !== 'Default' && <span className="product-brand-tag">• {formatLabel(product.brand)}</span>}
                     {product.subcategory !== 'Default' && <span className="product-subcat-tag">/ {formatLabel(product.subcategory)}</span>}
                  </div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {finalProducts.length === 0 && (
            <div className="no-products">
               <p>{t('productPage.noProduct')}</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
