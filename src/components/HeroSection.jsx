import React from 'react';
import '../styles/HeroSection.css'
import hero from "../assets/hero.webp";

const HeroSection = () => {
  return (
    <>
    <div className='hero-wrapper'>
    <section className="hero">
      <h1 className="hero-title">
        Discover trends that make you <span className="hero-highlight">Stylish</span>
      </h1>
      <button className="hero-button">Download Now 🚀</button>
    </section>
   

    <div className="wrapper">
    <img src={hero} alt="Hero Visual" className="hero-img" />
  </div>
    </div>
      
    </>
   
  );
};

export default HeroSection;
