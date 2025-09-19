import React from 'react';

const About = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI/ML Specialist',
      description: 'Extensive experience in machine learning, deep learning, and AI model development with proven results in real-world applications.'
    },
    {
      icon: '💼',
      title: 'Professional Experience',
      description: 'Completed specialized internships at Nokia (AI), NTI (Data Science), Saiket (ML Engineering), and Uneeq (Multi-track), plus NVIDIA Deep Learning certification.'
    },
    {
      icon: '🚀',
      title: 'Innovation Driver',
      description: 'Passionate about leveraging cutting-edge AI technologies to solve complex business problems and create impactful solutions.'
    },
    {
      icon: '📊',
      title: 'Data Science Expert',
      description: 'Proficient in data preprocessing, feature engineering, model optimization, and achieving high-performance results in ML projects.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              As a Senior student in Informatics and Computer Science with extensive professional experience, I have successfully completed specialized internships at leading companies including Nokia (AI Intern), NTI (Data Scientist), Saiket Software (ML Engineer), and Uneeq Interns (Multi-track: ML, UI/UX, Business Analysis). I hold a prestigious NVIDIA Deep Learning certificate and have developed multiple AI/ML projects achieving impressive results, including 75.7% accuracy in customer churn prediction and R² &gt; 0.99 in network performance prediction.
            </p>
            <p className="about-description">
              My expertise spans machine learning, deep learning, data science, and full-stack development. I am passionate about applying cutting-edge AI technologies to solve real-world business challenges and create innovative solutions that drive meaningful impact.
            </p>
          </div>
          
          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;