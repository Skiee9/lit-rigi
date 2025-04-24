import React from 'react';
import '../styles/UserTestimonials.css'

const UserTestimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="testimonials-heading">User Love </h3>


      <div className="testimonials-container">
        <div className="testimonial">
          <p>
          Lit Vibes is my go-to platform for quick style tips and educational content. The videos are short, engaging, and relatable to my everyday life. It's like having a personal style coach in my pocket!</p>
          <p>- Kriti</p>
        </div>
        <div className="testimonial">
          <p>
          I never thought learning about trends and personal development could be so fun and easy. Lit Vibes has helped me upgrade my style and confidence in just a few minutes a day!</p>
          <p>- Riya</p>
        </div>
        <div className="testimonial">
          <p>
          What I love about Lit Vibes is how it understands the needs of women like me. The videos are empowering, educational, and perfect for my busy schedule. It's truly inspiring!</p>
          <p>- Ayesha Khan</p>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
