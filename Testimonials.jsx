import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Jana consistently delivers high-quality code and approaches complex problems with a remarkable analytical mindset. Her projects always exceed expectations.",
      author: "University Professor",
      role: "Academic Supervisor"
    },
    {
      quote: "Her ability to quickly grasp new concepts and contribute effectively to team projects makes her an invaluable asset. A true leader in the making.",
      author: "Project Peer",
      role: "Team Member"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Positive Feedback</h2>
          <p className="section-subtitle">What others say about my work</p>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-intro">
            <p>
              While direct client testimonials aren't available yet for my academic projects, the feedback from instructors and peers has consistently highlighted my dedication, problem-solving abilities, and the quality of my work. My projects have received commendation for their robust implementation and innovative solutions.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">
                  <blockquote>"{testimonial.quote}"</blockquote>
                </div>
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;