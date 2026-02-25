import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Award, Users, ThumbsUp, Lightbulb } from 'lucide-react';
import Logo from '../assets/ProsperLogo-removebg.png';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_a2p2hm9', // Replace with your Service ID
        'template_vfc896i', // Replace with your Template ID
        form.current,
        {
          publicKey: 'MD4xcOmoqS5w-CrU9', // Replace with your Public Key
        }
      )
      .then(
        () => {
          setStatus(t('aboutPage.msgSuccess'));
          form.current.reset();
          // Reset status after a few seconds
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          const errorMessage = error.text || error.message || 'Unknown error occurred';
          setStatus(`${t('aboutPage.msgFailed')}${errorMessage}`);
          console.error('EmailJS Error:', error);
        }
      );
  };
  return (
    <div className="about-page">
      <Header />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>{t('aboutPage.heroTitle')}</h1>
            <p>{t('aboutPage.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>{t('aboutPage.whoWeAreTitle')}</h2>
              <div className="divider"></div>
              <p>
                {t('aboutPage.whoWeAreDesc1')}
              </p>
              <p>
                {t('aboutPage.whoWeAreDesc2')}
              </p>
            </div>
            <div className="about-stats-container">
               <div className="stat-card">
                 <h3>15+</h3>
                 <p>{t('aboutPage.statsExp')}</p>
               </div>
               <div className="stat-card">
                 <h3>500+</h3>
                 <p>{t('aboutPage.statsProj')}</p>
               </div>
               <div className="stat-card">
                 <h3>100%</h3>
                 <p>{t('aboutPage.statsSat')}</p>
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
              <h3>{t('aboutPage.missionTitle')}</h3>
              <p>
                {t('aboutPage.missionDesc')}
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">
                <Eye size={40} />
              </div>
              <h3>{t('aboutPage.visionTitle')}</h3>
              <p>
                {t('aboutPage.visionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('aboutPage.valuesTitle')}</h2>
            <p>{t('aboutPage.valuesSubtitle')}</p>
          </div>
          
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon"><Award size={32} /></div>
              <h3>{t('aboutPage.value1Title')}</h3>
              <p>{t('aboutPage.value1Desc')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><Users size={32} /></div>
              <h3>{t('aboutPage.value2Title')}</h3>
              <p>{t('aboutPage.value2Desc')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><ThumbsUp size={32} /></div>
              <h3>{t('aboutPage.value3Title')}</h3>
              <p>{t('aboutPage.value3Desc')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><Lightbulb size={32} /></div>
              <h3>{t('aboutPage.value4Title')}</h3>
              <p>{t('aboutPage.value4Desc')}</p>
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
              <h2>{t('aboutPage.getInTouch')}</h2>
              <p className="contact-desc">
                {t('aboutPage.getInTouchDesc')}
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>{t('aboutPage.visitUs')}</h3>
                  <p>555/72 Moo 10, Nai Khlong Bang Pla Kot,<br/>Phra Samut Chedi, Samut Prakan 10290</p>
                </div>
                <div className="contact-detail-item">
                  <h3>{t('aboutPage.callUs')}</h3>
                  <p>02-464-6969</p>
                  <p>02-464-6870 (Fax)</p>
                </div>
                <div className="contact-detail-item">
                  <h3>{t('aboutPage.emailUs')}</h3>
                  <p>Prosper.index@outlook.co.th</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <label htmlFor="user_name">{t('aboutPage.formName')}</label>
                  <input type="text" id="user_name" name="user_name" placeholder={t('aboutPage.formNamePh')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">{t('aboutPage.formEmail')}</label>
                  <input type="email" id="user_email" name="user_email" placeholder={t('aboutPage.formEmailPh')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('aboutPage.formMsg')}</label>
                  <textarea id="message" name="message" rows="4" placeholder={t('aboutPage.formMsgPh')} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{t('aboutPage.btnSend')}</button>
                {status && <p className="form-status" style={{ marginTop: '15px', fontWeight: '500', color: status.includes('Failed') ? '#e74c3c' : '#2ecc71' }}>{status}</p>}
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
