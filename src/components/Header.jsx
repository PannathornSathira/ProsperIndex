import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';
import Logo from '../assets/ProsperLogo-removebg.png';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/service' },
    { name: t('nav.products'), href: '/product' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.events'), href: '/events' },
    { name: t('nav.about'), href: '/about' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={Logo} alt="ProsperIndex Tech" />
          </a>
        </div>

        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="language-switcher" style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem', cursor: 'pointer', gap: '5px' }} onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}>
            <Globe size={18} />
            <span style={{ fontWeight: 'bold' }}>{language.toUpperCase()}</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
