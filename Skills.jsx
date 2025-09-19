import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'C#', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Dart', level: 70 },
    { name: 'C', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Data Science', level: 85 },
    { name: 'Object Detection', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'FlutterFlow', level: 75 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Analysis', level: 95 },
    { name: 'Image Processing', level: 80 },
    { name: 'Data Structure', level: 75 },
    { name: 'C++', level: 85 },
  ];

  const nonTechnicalSkills = [
    'Communication Skills',
    'Leadership Skills',
    'Problem-Solving',
    'Public Speaking',
    'English & Arabic Fluency',
    'Time Management',
    'Teamwork and Collaboration',
    'Adaptability and Flexibility',
    'Critical Thinking',
    'Decision Making',
    'Creativity and Innovation',
    'Attention to Detail',
    'Empathy',
    'Willingness to Learn',
    'Organization and Planning',
    'Proactive and Responsible',
    'Resilience and Perseverance',
    'Self-Motivation and Goal-Oriented'
   
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Skills: My Toolkit for Success</h2>
          <p className="section-subtitle">Technical and non-technical proficiencies</p>
        </div>

        <div className="skills-content" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div className="skills-section" style={{ flex: 1, minWidth: '300px' }}>
            <h3 className="skills-category-title">Technical Proficiencies</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section" style={{ flex: 1, minWidth: '300px' }}>
            <h3 className="skills-category-title">Non-Technical Strengths</h3>
            <div className="soft-skills">
              {nonTechnicalSkills.map((skill, index) => (
                <div key={index} className="soft-skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;