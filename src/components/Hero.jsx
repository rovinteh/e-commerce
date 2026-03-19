import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-subtitle">Bespoke Memories</h2>
        <h1 className="hero-title">Preserve the Magic of Your Special Moments</h1>
        <p className="hero-description">
          Capture, share, and relive your most precious memories with a touch of elegance and nostalgia.
        </p>
        <div className="hero-cta">
          <a href="#memories" className="btn-primary">Explore Our Memories</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
