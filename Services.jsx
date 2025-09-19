import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Programming & Development',
      description: 'Expertise in multiple languages to build robust and efficient applications.',
      features: ['Full-stack Development', 'API Integration', 'Code Optimization']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning Solutions',
      description: 'Developing intelligent systems, including object detection models and data-driven solutions.',
      features: ['Object Detection', 'Predictive Analytics', 'Model Training']
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Manipulating datasets and creating compelling visuals to extract key insights and trends.',
      features: ['Data Visualization', 'Statistical Analysis', 'Pattern Recognition']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Crafting responsive and interactive web experiences, from frontend design to backend integration.',
      features: ['Responsive Design', 'User Experience', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services: What I Offer</h2>
          <p className="section-subtitle">Comprehensive solutions for your technology needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;