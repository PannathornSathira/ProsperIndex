import React from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h3>ProsperIndex</h3>
            <p style={{ color: '#ccc', marginBottom: '1rem' }}>
              {t('footer.companyDesc')}
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="social-icon" aria-label="Line"><Instagram size={20} /></a> {/* Using Instagram as placeholder for Line if custom icon needed */}
              <a href="#" className="social-icon" aria-label="TikTok"><Twitter size={20} /></a> {/* Using Twitter as placeholder for TikTok */}
              <a href="#" className="social-icon" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-column">
            <h3>{t('footer.contactUs')}</h3>
            <div className="contact-item">
              <MapPin size={18} color="var(--color-accent)" />
              <span>{t('footer.companyAddress')}</span>
            </div>
            <div className="contact-item">
              <Phone size={18} color="var(--color-accent)" />
              <span>Tel : 02-464-6969</span>
            </div>
            <div className="contact-item">
              <Phone size={18} color="var(--color-accent)" />
              <span>Fax : 02-464-6870</span>
            </div>
            <div className="contact-item">
              <Mail size={18} color="var(--color-accent)" />
              <span>Prosper.index@outlook.co.th</span>
            </div>
          </div>

          {/* Map */}
          <div className="footer-column">
            <h3>{t('footer.findUs')}</h3>
            <div className="map-container">
              {/* Embed Google Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.9611677884278!2d100.50747930043157!3d13.600536015955266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a3f530e2f459%3A0xe198b62b8dd28de2!2zSkcyNSs1MzQg4LmB4LiC4Lin4LiH4LiX4Li44LmI4LiH4LiE4Lij4Li4IOC5gOC4guC4leC4l-C4uOC5iOC4h-C4hOC4o-C4uCDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTAxNDA!5e0!3m2!1sth!2sth!4v1770608348849!5m2!1sth!2sth" 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.6 }}>{t('footer.developedBy')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
