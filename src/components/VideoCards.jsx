import React from 'react';
import '../styles/VideoCards.css'
import card from '../assets/card.webp'




const VideoCards = () => {
 

  return (
    <section className="video-cards">
      <h3 className="video-cards-heading">Seamless Style in Every Second</h3>
    <div className="wrapper">
        <img src={card} alt="card Visual" className="card-img" />
      </div>
    </section>
  );
};

export default VideoCards;
