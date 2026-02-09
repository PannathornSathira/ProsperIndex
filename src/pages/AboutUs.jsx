import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Award, Users, ThumbsUp, Lightbulb } from 'lucide-react';
import Logo from '../assets/ProsperLogo-removebg.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <Header />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About ProsperIndex</h1>
            <p>Your Trusted Partner in Engineering Excellence & Innovation</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <div className="divider"></div>
              <p>
                ProsperIndex Co., Ltd. operates and provides services for solving electrical problems such as power outages, surges, blackouts, fires, and lightning strikes. We possess knowledge, expertise, and specialization in Power Quality systems, Protection Equipment, Fire Alarm, Fire Protection, Power Supply, and more.
              </p>
              <p>
                We address issues that cause extensive damage to electrical appliances and electronic equipment, including computers, medical devices, communication tools, and audio systems. With products designed to support and resolve these problems effectively, we serve offices, hospitals, hotels, industrial factories, and laboratories. Backed by over 15 years of experience, we have been caring for leading hospitals and hotels nationwide.
              </p>
            </div>
            <div className="about-stats-container">
               <div className="stat-card">
                 <h3>15+</h3>
                 <p>Years Experience</p>
               </div>
               <div className="stat-card">
                 <h3>500+</h3>
                 <p>Projects Completed</p>
               </div>
               <div className="stat-card">
                 <h3>100%</h3>
                 <p>Client Satisfaction</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide innovative, reliable, and sustainable engineering solutions that empower businesses to operate safely and efficiently. We strive to reduce energy costs and enhance security through cutting-edge technology and professional service.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">
                <Eye size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred engineering solutions provider in the region, recognized for our commitment to quality, safety, and customer success in the fields of green energy and smart infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p>The principles that drive our success and your satisfaction.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon"><Award size={32} /></div>
              <h3>Quality</h3>
              <p>We never compromise on the quality of our equipment or our workmanship.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><Users size={32} /></div>
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical standards.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><ThumbsUp size={32} /></div>
              <h3>Reliability</h3>
              <p>You can count on us to deliver on time, on budget, and to your specifications.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><Lightbulb size={32} /></div>
              <h3>Innovation</h3>
              <p>We constantly seek new technologies to provide better efficient solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section contact-section" id="contact-us">
        <div className="container">
          <div className="contact-wrapper">
            
            <div className="contact-info">
              <img src={Logo} alt="ProsperIndex Tech" width="40%"/>
              <br></br>
              <h2>Get in Touch</h2>
              <p className="contact-desc">
                Have a project in mind or need expert advice? Contact our team today 
                and let's build something great together.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>Visit Us</h3>
                  <p>555/72 Moo 10, Nai Khlong Bang Pla Kot,<br/>Phra Samut Chedi, Samut Prakan 10290</p>
                </div>
                <div className="contact-detail-item">
                  <h3>Call Us</h3>
                  <p>02-464-6969</p>
                  <p>02-464-6870 (Fax)</p>
                </div>
                <div className="contact-detail-item">
                  <h3>Email Us</h3>
                  <p>Prosper.index@outlook.co.th</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
