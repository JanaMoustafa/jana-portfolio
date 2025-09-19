import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'The British University in Egypt',
      degree: 'Faculty of Informatics and Computer Science (Senior Student)',
      location: 'Cairo, Egypt',
      period: 'Sept 2022 - June 2026',
      type: 'university'
    },
    {
      institution: 'NVIDIA Deep Learning Institute',
      degree: 'Deep Learning Certificate',
      location: 'Online',
      period: '2024',
      type: 'certificate',
      description: 'Comprehensive training in deep learning fundamentals and applications.'
    },
    {
      institution: 'Nokia Company',
      degree: 'Artificial Intelligence Intern',
      location: 'Egypt',
      period: '2025',
      type: 'internship',
      description: 'Specialized in AI model development and implementation for telecommunications solutions.'
    },
    {
      institution: 'Information Technology Institute (ITI)',
      degree: 'AI/ML Specialized Training',
      location: 'Cairo, Egypt',
      period: '2025',
      type: 'training',
      description: 'Intensive training in artificial intelligence and machine learning applications.'
    },
    {
      institution: 'National Telecommunication Institute (NTI)',
      degree: 'Data Scientist Intern',
      location: 'Cairo, Egypt',
      period: '2025',
      type: 'internship',
      description: 'Applied data science techniques to analyze telecommunications data and extract actionable insights.'
    },
    {
      institution: 'Saiket Software Company',
      degree: 'Machine Learning Engineer Intern',
      location: 'Egypt',
      period: '2025',
      type: 'internship',
      description: 'Developed and deployed machine learning models for various software applications and systems.'
    },
    {
      institution: 'Uneeq Interns',
      degree: 'Multi-Track Internship (ML, UI/UX, Business Analysis)',
      location: 'Remote',
      period: '2025',
      type: 'internship',
      description: 'Comprehensive experience across Machine Learning, UI/UX Design, and Business Analysis tracks.'
    },
    {
      institution: 'Digital Egypt Pioneers Initiative',
      degree: 'Data Science Track - 6-Month Training',
      location: 'Egypt',
      period: 'June 2025 - Dec 2025',
      type: 'training'
    },
    {
      institution: 'Nermeen Ismail British School',
      degree: 'High School Diploma (100% IGCSE Score)',
      location: 'Cairo, Egypt',
      period: '2018 - 2023',
      type: 'school'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Continuous Learning</h2>
          <p className="section-subtitle">My academic journey and professional development</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item ${edu.type}`}>
              <div className="timeline-marker">
                <div className="marker-icon">
                  {edu.type === 'university' && '🎓'}
                  {edu.type === 'training' && '📚'}
                  {edu.type === 'school' && '🏫'}
                  {edu.type === 'certificate' && '🏆'}
                  {edu.type === 'internship' && '💼'}
                </div>
              </div>
              <div className="timeline-content">
                <h3 className="institution-name">{edu.institution}</h3>
                <h4 className="degree">{edu.degree}</h4>
                <div className="education-meta">
                  <span className="location">📍 {edu.location}</span>
                  <span className="period">📅 {edu.period}</span>
                </div>
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;