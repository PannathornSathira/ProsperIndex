import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { events } from '../data/eventsData';
import './Events.css';

const Events = () => {
  return (
    <section className="events-section section" id="events">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-subtitle">Stay informed about our company news and industry insights.</p>
        </div>

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
  );
};

export default Events;
