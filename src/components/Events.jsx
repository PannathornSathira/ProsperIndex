import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { events } from '../data/eventsData';
import './Events.css';

const Events = () => {
  const displayEvents = events.slice(0, 3);
  return (
    <section className="events-section section" id="events">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-subtitle">Stay informed about our company news and industry insights.</p>
        </div>

        <div className="events-grid">
          {displayEvents.map((event) => (
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

        {events.length > 3 && (
          <div className="text-center" style={{ marginTop: '3.5rem' }}>
            <Link to="/events" style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
            }}>
              View All Events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
