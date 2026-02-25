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

export const events = [
  {
    id: 1,
    title: 'Solar Energy Systems Seminar',
    date: 'March 15, 2026',
    dateTh: '15 มีนาคม 2026',
    image: eventSolar2,
    images: [eventSolar1, eventSolar2, eventSolar3, eventSolar4, eventSolar5],
    excerpt: 'Join our comprehensive seminar on Solar Energy Systems. Learn about the latest advancements in solar technology, installation techniques, and maintenance best practices for maximizing grid-connected efficiency.',
    excerptTh: 'เข้าร่วมงานสัมมนาครบวงจรเกี่ยวกับระบบพลังงานแสงอาทิตย์ของเรา เรียนรู้เกี่ยวกับความก้าวหน้าล่าสุดของเทคโนโลยีโซลาร์เซลล์ เทคนิคการติดตั้ง และแนวทางปฏิบัติที่ดีที่สุดในการบำรุงรักษาเพื่อเพิ่มประสิทธิภาพ',
    description: 'Our Solar Energy Systems Seminar is designed for professionals and clients looking to deepen their understanding of renewable energy. This event covers a wide range of topics including site assessment, custom solar panel system design, proper installation protocols, and performance monitoring. Participants will gain valuable insights on how to reduce operational costs and ensure maximum output from grid-connected solar power systems.',
    descriptionTh: 'งานสัมมนาระบบพลังงานแสงอาทิตย์ของเราออกแบบมาสำหรับมืออาชีพและลูกค้าที่ต้องการทำความเข้าใจเกี่ยวกับพลังงานหมุนเวียนอย่างลึกซึ้ง งานนี้ครอบคลุมหัวข้อต่างๆ มากมาย เช่น การประเมินพื้นที่ การออกแบบระบบแผงโซลาร์เซลล์ โปรโตคอลการติดตั้งที่เหมาะสม และการตรวจสอบประสิทธิภาพ ผู้เข้าร่วมจะได้รับข้อมูลเชิงลึกอันมีค่าเกี่ยวกับวิธีการลดต้นทุนการดำเนินงานและรับประกันผลผลิตสูงสุดจากระบบพลังงานแสงอาทิตย์',
    tags: ['Solar', 'Training', 'Energy']
  },
  {
    id: 2,
    title: 'Technical Training: CCTV & UPS Solutions',
    date: 'February 28, 2026',
    dateTh: '28 กุมภาพันธ์ 2026',
    image: eventHikUps2,
    images: [eventHikUps1, eventHikUps2, eventHikUps3, eventHikUps4, eventHikUps5],
    excerpt: 'An intensive technical training session focusing on advanced CCTV configurations for maximum security and UPS systems for uninterruptible power supply in critical operations.',
    excerptTh: 'เซสชั่นการฝึกอบรมทางเทคนิคเชิงลึกที่เน้นการกำหนดค่ากล้องวงจรปิดขั้นสูงเพื่อความปลอดภัยสูงสุด และระบบ UPS เพื่อการจ่ายไฟอย่างต่อเนื่องในการปฏิบัติงานที่สำคัญ',
    description: 'In this Technical Training, we dive deep into the setup and management of modern CCTV and UPS Solutions. The morning session focuses on IP Camera surveillance systems, biometric access control, and remote monitoring capabilities to ensure total asset security. The afternoon is dedicated to Electrical Protection, covering voltage stabilization, Surge Protection Devices (SPD), and backup power strategies using UPS to safeguard expensive medical, hotel, and industrial equipment against power disruptions.',
    descriptionTh: 'ในการฝึกอบรมทางเทคนิคนี้ เราเจาะลึกเกี่ยวกับการตั้งค่าและการจัดการโซลูชันกล้องวงจรปิดและ UPS ที่ทันสมัย ช่วงเช้าเน้นที่ระบบกล้องวงจรปิด IP การควบคุมการเข้าออกด้วยไบโอเมตริกซ์ และความสามารถในการตรวจสอบระยะไกลเพื่อการรักษาความปลอดภัยของทรัพย์สินทั้งหมด ช่วงบ่ายอุทิศให้กับการป้องกันระบบไฟฟ้า ครอบคลุมการรักษาแรงดันไฟฟ้า อุปกรณ์ป้องกันไฟกระชาก (SPD) และกลยุทธ์พลังงานสำรองโดยใช้ UPS เพื่อปกป้องอุปกรณ์ทางการแพทย์ โรงแรม และอุตสาหกรรมที่มีราคาแพงจากปัญหาไฟฟ้า',
    tags: ['CCTV', 'UPS', 'Security']
  },
  {
    id: 3,
    title: 'Fire Alarm Systems Certification Seminar',
    date: 'February 10, 2026',
    dateTh: '10 กุมภาพันธ์ 2026',
    image: eventFA1,
    images: [eventFA1, eventFA2, eventFA3],
    excerpt: 'Ensure safety and compliance with our Fire Alarm Systems Certification Seminar. We cover state-of-the-art fire detection design, installation, and rigorous maintenance standards.',
    excerptTh: 'มั่นใจในความปลอดภัยและการปฏิบัติตามข้อกำหนดด้วยงานสัมมนาการรับรองระบบสัญญาณแจ้งเหตุเพลิงไหม้ของเรา เราครอบคลุมการออกแบบระบบตรวจจับอัคคีภัยที่ทันสมัย การติดตั้ง และมาตรฐานการบำรุงรักษาที่เข้มงวด',
    description: 'Safety is our top priority. The Fire Alarm Systems Certification Seminar provides rigorous training on the design, installation, and maintenance of state-of-the-art fire detection and alarm systems. Topics include emergency lighting integration, exit sign systems, and compliance strictly aligned with legal safety standards. By completing this seminar, technicians ensure they are fully certified to handle safety-critical mechanisms, protecting lives and property in commercial facilities.',
    descriptionTh: 'ความปลอดภัยคือสิ่งที่เราให้ความสำคัญสูงสุด งานสัมมนาการรับรองระบบสัญญาณแจ้งเหตุเพลิงไหม้จัดให้มีการฝึกอบรมอย่างเข้มงวดเกี่ยวกับการออกแบบ การติดตั้ง และการบำรุงรักษาระบบตรวจจับและแจ้งเหตุเพลิงไหม้ที่ทันสมัย หัวข้อประกอบด้วยการทำงานร่วมกับแสงสว่างฉุกเฉิน ระบบป้ายทางออก และการปฏิบัติตามมาตรฐานความปลอดภัยทางกฎหมายอย่างเคร่งครัด เมื่อผ่านการสัมมนานี้ ช่างเทคนิคจะมั่นใจได้ว่าได้รับการรับรองอย่างสมบูรณ์ในการจัดการกลไกความปลอดภัย เพื่อปกป้องชีวิตและทรัพย์สินในอาคารพาณิชย์',
    tags: ['Fire Alarm', 'Safety', 'Certification']
  },
];
