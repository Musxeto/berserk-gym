import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left">
        <div className="hero-text">
          <div className="top-text">
            <span>BUILD YOUR</span>
          </div>
          <div className="bottom-text">
            <span className="stroke-text">DREAM </span>
            <span>PHYSIQUE</span>
          </div>
          <div className="description">
            <div>
              Discover the path to your ideal shape & strength with our
              transformative
            </div>
            <div> fitness programs & modern equipments.</div>
          </div>
        </div>
        <div className="cta-buttons">
          <button className="solid-button">Free Trial Pass</button>
          <button className="outline-button">Explore Services</button>
        </div>
      </div>

      <div className="right">right</div>
    </div>
  );
};

export default HeroSection;
