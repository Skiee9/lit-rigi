import React from 'react';

const VideoCards = () => {
  const videos = [
    "Netflix के 3 Crime Thrillers देखो",
    "Must Try Trending Blouse",
    "Top 3 Products for Clear Skin",
    "शादी में ऐसे तैयार होना!",
    "₹399 में Best Finds"
  ];

  return (
    <section className="video-cards">
      <h3 className="video-cards__heading">Seamless Style in Every Second</h3>
      <div className="video-cards__container">
        {videos.map((title, index) => (
          <div key={index} className="video-card">
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCards;
