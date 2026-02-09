import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Solar Energy Seminar 2026',
      date: 'March 15, 2026',
      image: 'https://placehold.co/600x400/FFD700/333?text=Seminar',
      excerpt: 'Join us for a deep dive into the latest solar technologies and regulations in Thailand.',
    },
    {
      id: 2,
      title: 'Safety First: Engineering Certification',
      date: 'February 28, 2026',
      image: 'https://placehold.co/600x400/0047AB/FFF?text=Training',
      excerpt: 'Our team completes the advanced ISO 45001 safety training certification.',
    },
    {
      id: 3,
      title: 'New Partnership with Global Tech Giant',
      date: 'February 10, 2026',
      image: 'https://placehold.co/600x400/4CAF50/FFF?text=Partnership',
      excerpt: 'ProsperIndex announces a strategic partnership to expand green energy solutions.',
    },
  ];

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
                <a href="#" className="read-more">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
