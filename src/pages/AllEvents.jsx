import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../data/eventsData';
import '../components/Events.css';

const AllEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-events-page" style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <section className="project-hero" style={{ 
        background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
        color: 'var(--color-text-white)',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>All Events & News</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Stay updated with our latest seminars, training sessions, and company announcements.
          </p>
        </div>
      </section>

      <section className="section" style={{ flexGrow: 1, backgroundColor: 'var(--color-bg-off-white)' }}>
        <div className="container">
          <div className="events-grid">
            {events.map((event) => (
              <article key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
                <div className="event-content">
                  <div className="event-date">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                    {event.date}
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-excerpt">{event.excerpt}</p>
                  <Link to={`/events/${event.id}`} className="read-more">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllEvents;
