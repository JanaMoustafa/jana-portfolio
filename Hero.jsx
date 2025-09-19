import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">Jana Mostafa Sabry</span>
            </h1>
            <h2 className="hero-subtitle">
              Driving Innovation in Programming, Data Science, and AI
            </h2>
            <p className="hero-description">
              A portfolio showcasing skills, projects, and vision for the future of technology.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="placeholder-avatar">
                  <span>JS</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Senior Student</h3>
                <p>Informatics & Computer Science</p>
                <p>The British University in Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
 
};

export default Hero;