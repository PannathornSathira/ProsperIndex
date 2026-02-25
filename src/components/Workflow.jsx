import React from 'react';
import { MessagesSquare, ClipboardCheck, PenTool, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Workflow.css';

const Workflow = () => {
  const { t } = useLanguage();
  const steps = [
    {
      id: 1,
      title: t('workflow.step1Title'),
      description: t('workflow.step1Desc'),
      icon: <MessagesSquare size={32} />,
    },
    {
      id: 2,
      title: t('workflow.step2Title'),
      description: t('workflow.step2Desc'),
      icon: <ClipboardCheck size={32} />,
    },
    {
      id: 3,
      title: t('workflow.step3Title'),
      description: t('workflow.step3Desc'),
      icon: <PenTool size={32} />,
    },
    {
      id: 4,
      title: t('workflow.step4Title'),
      description: t('workflow.step4Desc'),
      icon: <Wrench size={32} />,
    },
  ];

  return (
    <section className="workflow-section section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">{t('workflow.sectionTitle')}</h2>
          <p className="section-subtitle">{t('workflow.sectionSubtitle')}</p>
        </div>

        <div className="workflow-grid">
          {steps.map((step) => (
            <div key={step.id} className="workflow-card">
              <div className="workflow-step-number">{step.id}</div>
              <div className="workflow-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
