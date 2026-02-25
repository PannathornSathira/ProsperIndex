import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { events } from '../data/eventsData';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useLanguage } from '../context/LanguageContext';
import './EventDetail.css';

const EventDetail = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <>
        <Header />
        <div className="event-detail-page section">
          <div className="container" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>{language === 'th' ? 'ไม่พบกิจกรรม' : 'Event not found'}</h2>
            <Link to="/" className="back-link" style={{ marginTop: '1rem' }}>
              <ArrowLeft size={20} /> {language === 'th' ? 'กลับสู่หน้าหลัก' : 'Back to Home'}
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="event-detail-page section">
        <div className="container">
          <div className="event-detail-header">
            <Link to="/events" className="back-link">
              <ArrowLeft size={20} /> {language === 'th' ? 'กลับสู่กิจกรรมทั้งหมด' : 'Back to Events'}
            </Link>
            <div className="event-detail-meta">
              <span className="event-date">
                <Calendar size={18} />
                {language === 'th' ? event.dateTh : event.date}
              </span>
              <div className="event-tags">
                {event.tags && event.tags.map((tag, idx) => (
                  <span key={idx} className="event-tag">{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="event-detail-title">{event.title}</h1>
          </div>

          <div className="event-detail-banner">
            <img src={event.image} alt={event.title} />
          </div>

          <div className="event-detail-content">
            <p className="event-description">{language === 'th' ? event.descriptionTh : event.description}</p>
          </div>

          <div className="event-gallery-section">
            <h3 className="gallery-title">{language === 'th' ? 'รูปภาพจากกิจกรรม' : 'Event Photos'}</h3>
            <div className="event-detail-gallery">
              {event.images.map((imgSrc, index) => (
                <div key={index} className="gallery-item">
                  <img src={imgSrc} alt={`${event.title} image ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
