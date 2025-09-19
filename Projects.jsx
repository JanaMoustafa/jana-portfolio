import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Customer Churn Prediction System',
      description: 'Developed a comprehensive machine learning pipeline to predict customer churn using the Telco Customer Churn Dataset. Implemented advanced data preprocessing including missing value handling, outlier detection, and SMOTE resampling for class imbalance. Trained multiple classifiers including Logistic Regression, Random Forest, AdaBoost, and Naive Bayes, achieving 75.7% accuracy with XGBoost.',
      technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'SMOTE', 'Data Visualization'],
      features: ['Data Preprocessing', 'Feature Engineering', 'Model Comparison', 'Performance Optimization', 'Class Imbalance Handling']
    },
    {
      title: 'Network Performance Prediction Pipeline',
      description: 'Built a robust pipeline to predict network KPIs from raw datasets. Engineered temporal, spatial, and signal-related features including cyclical encoding, Haversine distance calculations, and lag/rolling statistics. Implemented unsupervised anomaly detection using Isolation Forest and achieved R² > 0.99 on throughput prediction using XGBoost and LightGBM.',
      technologies: ['Python', 'XGBoost', 'LightGBM', 'Isolation Forest', 'Scikit-learn Pipelines', 'Feature Engineering'],
      features: ['Time Series Analysis', 'Anomaly Detection', 'Feature Engineering', 'Ensemble Methods', 'Pipeline Automation']
    },
    {
      title: 'AI-Powered Meal Planning App',
      description: 'Developed a comprehensive meal planning application using FlutterFlow that calculates daily calorie intake based on user metrics (height, weight, gender). Integrated with a food ordering web page containing categorized foods with calorie information per 100g. Features API integration for real-time data and personalized nutrition recommendations.',
      technologies: ['FlutterFlow', 'Dart', 'API Integration', 'Nutrition APIs', 'Mobile Development', 'Web Integration'],
      features: ['Calorie Calculation', 'Food Categorization', 'API Integration', 'Personalized Recommendations', 'Cross-platform App']
    },
    {
      title: 'Business Analysis & UI/UX Projects',
      description: 'Conducted comprehensive market analysis for Pocket Pay App (FinTech sector in Egypt) and designed streamlined e-commerce return processes. Created detailed user personas for Easy Learn platform and developed multiple UI/UX designs including AI-powered productivity apps, donation websites, freelancer platforms, and mental health applications.',
      technologies: ['Market Research', 'Stakeholder Analysis', 'UI/UX Design', 'Figma', 'User Research', 'Process Optimization'],
      features: ['Market Analysis', 'User Personas', 'Process Design', 'UI/UX Prototyping', 'Stakeholder Interviews']
    },
    {
      title: 'Advanced Machine Learning Portfolio',
      description: 'Developed multiple ML models including handwritten digit recognition using MNIST dataset with neural networks, healthcare diagnosis classification using various algorithms, and comprehensive training in supervised/unsupervised learning. Mastered ensemble methods, cross-validation, CNNs for image processing, and NLP techniques.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Neural Networks', 'CNNs', 'NLP', 'Ensemble Learning', 'Cross-validation'],
      features: ['Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Model Evaluation', 'Hyperparameter Tuning']
    },
    {
      title: 'Emotion Detection AI Model',
      description: 'Developed an advanced computer vision model that analyzes uploaded photos to detect and classify human emotions including happy, sad, angry, excited, and surprised. Implemented robust image processing techniques and trained deep learning models to achieve high accuracy in emotion recognition across diverse facial expressions and lighting conditions.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'Computer Vision', 'Deep Learning', 'Image Processing', 'CNN'],
      features: ['Real-time Emotion Detection', 'Multi-class Classification', 'Image Upload Interface', 'Robust to Lighting Variations', 'High Accuracy Recognition']
    },
    {
      title: 'Animal Classification System',
      description: 'Built an intelligent animal detection and classification system that automatically identifies animals in photos and determines their class/species. The model is designed to work effectively across different lighting conditions, environments, and image resolutions, providing accurate animal recognition for wildlife monitoring and educational applications.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Transfer Learning', 'Image Augmentation', 'CNN', 'Data Preprocessing'],
      features: ['Multi-species Detection', 'Environment Adaptation', 'Resolution Independence', 'Lighting Robustness', 'Automated Classification']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🤖 AI/ML Projects & Professional Experience</h2>
          <p className="section-subtitle">A showcase of my machine learning expertise and real-world applications</p>
        </div>

        <div className="projects-content">
          <div className="project-navigation">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`project-nav-btn ${selectedProject === index ? 'active' : ''}`}
                onClick={() => setSelectedProject(index)}
              >
                {project.title}
              </button>
            ))}
          </div>

          <div className="project-showcase">
            <div className="project-details">
              <h3 className="project-title">{projects[selectedProject].title}</h3>
              <p className="project-description">{projects[selectedProject].description}</p>
              
              <div className="project-features">
                <h4>🚀 Key Features & Achievements:</h4>
                <ul>
                  {projects[selectedProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>🛠️ Technologies & Tools:</h4>
                <div className="tech-tags">
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;