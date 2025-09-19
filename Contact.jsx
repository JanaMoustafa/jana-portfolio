import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'jana.sabry.abdelwahhab@gmail.com',
      link: 'mailto:jana.sabry.abdelwahhab@gmail.com'
    },
    {
      icon: '📱',
      title: 'Mobile',
      value: '+201095106023',
      link: 'tel:+201095106023'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/jana-mostafa-535ab62a2',
      link: 'https://linkedin.com/in/jana-mostafa-535ab62a2'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🤖 Let's Connect</h2>
          <p className="section-subtitle">
            I am actively seeking opportunities to contribute my AI expertise and grow within an innovative team. 
            Feel free to reach out to discuss potential roles or collaborations in the field of artificial intelligence.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info glass interactive-element">
            <h3>🚀 Get In Touch</h3>
            <p>
              Ready to discuss how I can contribute to your AI team? I'm always excited to explore new opportunities 
              and collaborate on cutting-edge AI projects and machine learning solutions.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method interactive-element">
                  <div className="contact-icon neon-glow">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container glass interactive-element">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">👤 Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="ai-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">📧 Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="ai-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">🎯 Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="ai-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">💬 Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="ai-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary neon-glow">
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;