// Solar Event Images
import eventSolar1 from '../assets/SolarEvent/สัมมนาโซลาร์1.jpg';
import eventSolar2 from '../assets/SolarEvent/สัมมนาโซลาร์2.jpg';
import eventSolar3 from '../assets/SolarEvent/สัมมนาโซลาร์3.jpg';
import eventSolar4 from '../assets/SolarEvent/สัมมนาโซลาร์4.jpg';
import eventSolar5 from '../assets/SolarEvent/สัมมนาโซลาร์5.jpg';

// Hik-Ups Event Images
import eventHikUps1 from '../assets/Hik-Ups/สัมมนาHik-Ups1.jpg';
import eventHikUps2 from '../assets/Hik-Ups/สัมมนาHik-Ups2.jpg';
import eventHikUps3 from '../assets/Hik-Ups/สัมมนาHik-Ups3.jpg';
import eventHikUps4 from '../assets/Hik-Ups/สัมมนาHik-Ups4.jpg';
import eventHikUps5 from '../assets/Hik-Ups/สัมมนาHik-Ups5.jpg';

// FA Event Images
import eventFA1 from '../assets/FAEvent/สัมมนาFire-alarm1.jpg';
import eventFA2 from '../assets/FAEvent/สัมมนาFire-alarm2.jpg';
import eventFA3 from '../assets/FAEvent/สัมมนาFire-alarm3.jpg';

const excerptText = "Our company conducts training seminars to educate our customers and technicians about our products and their applications. Topics covered include solar energy systems, fire alarms, CCTV cameras, and UPS systems.";

export const events = [
  {
    id: 1,
    title: 'Solar Energy Systems Seminar',
    date: 'March 15, 2026',
    image: eventSolar2,
    images: [eventSolar1, eventSolar2, eventSolar3, eventSolar4, eventSolar5],
    excerpt: excerptText,
    description: 'Our company conducts comprehensive training seminars to educate customers and technicians on the latest products and best practices. This seminar focused heavily on Solar Energy Solutions, covering design, installation, and maintenance to ensure top-tier performance and safety for all our clients. We shared insights on grid-connected solar power and how to maximize output effectively.',
    tags: ['Solar', 'Training', 'Energy']
  },
  {
    id: 2,
    title: 'Technical Training: CCTV & UPS Solutions',
    date: 'February 28, 2026',
    image: eventHikUps2,
    images: [eventHikUps1, eventHikUps2, eventHikUps3, eventHikUps4, eventHikUps5],
    excerpt: excerptText,
    description: 'Our company conducts comprehensive training seminars to educate customers and technicians on the latest products and best practices. In this session, topics covered included CCTV Camera configurations for maximum security coverage, as well as critical UPS Systems essential for uninterrupted power supply in commercial environments. Participants got hands-on experience with equipment setup and troubleshooting.',
    tags: ['CCTV', 'UPS', 'Security']
  },
  {
    id: 3,
    title: 'Fire Alarm Systems Certification Seminar',
    date: 'February 10, 2026',
    image: eventFA1,
    images: [eventFA1, eventFA2, eventFA3],
    excerpt: excerptText,
    description: 'Our company conducts comprehensive training seminars to educate customers and technicians on the latest products and best practices. Safety is our priority, and this training detailed the proper installation and response protocols for Fire Alarm systems, making sure all technicians are fully certified to handle these critical safety mechanisms in both commercial and residential projects.',
    tags: ['Fire Alarm', 'Safety', 'Certification']
  },
];
