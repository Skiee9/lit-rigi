import React from 'react';
import '../styles/UserTestimonials.css'

const UserTestimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="testimonials__heading">User Love ❤️</h3>
      <div className="testimonials__container">
        <div className="testimonial">
          <p>"This app changed my wardrobe game!"</p>
          <p>- Kriti</p>
        </div>
        <div className="testimonial">
          <p>"Short, snappy videos. Super fun."</p>
          <p>- Riya</p>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
