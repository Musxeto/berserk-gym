import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container-fluid hero-section">
      <div className="orange-bubble d-lg-none d-md-none"></div>
      <div className="row no-gutters">
        <div className="col-md-8 col-12 left">
          <div className="loading-beast">
            <div></div>
            <span>UNLEASH YOUR INNER BEAST AT BERSERK</span>
          </div>
          <div className="hero-text">
            <div className="top-text">
              <span>BUILD YOUR</span>
            </div>
            <div className="bottom-text">
              <span className="stroke-text dream">DREAM </span>
              <span>PHYSIQUE </span>
            </div>
            <div className="description">
              <span>
                Discover the path to your ideal shape & strength with our
                transformative
              </span>
              <span>fitness programs & modern equipments.</span>
            </div>
          </div>
          <div className="cta-buttons">
            <button
              className="btn btn-primary solid-button"
              data-bs-toggle="modal"
              data-bs-target="#SignUpModal"
            >
              Free Trial Pass
            </button>
            <button className="btn outline-button">Explore Services</button>
          </div>
        </div>
        <div className="col-md-4 col-12  d-md-block right">
          <div className="body-builder">
            <img src="/athlete.png" alt="Athlete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
