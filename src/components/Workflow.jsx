import React from 'react';
import { MessagesSquare, ClipboardCheck, PenTool, Wrench } from 'lucide-react';
import './Workflow.css';

const Workflow = () => {
  const steps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Expert advice tailored to your energy needs and industrial requirements.',
      icon: <MessagesSquare size={32} />,
    },
    {
      id: 2,
      title: 'Site Survey',
      description: 'Precision assessment of your location for optimal system performance.',
      icon: <ClipboardCheck size={32} />,
    },
    {
      id: 3,
      title: 'Professional Design',
      description: 'Custom engineering solutions designed for efficiency and safety.',
      icon: <PenTool size={32} />,
    },
    {
      id: 4,
      title: 'Expert Installation',
      description: 'Seamless installation with rigorous quality assurance and testing.',
      icon: <Wrench size={32} />,
    },
  ];

  return (
    <section className="workflow-section section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">From concept to completion, we ensure excellence every step of the way.</p>
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
