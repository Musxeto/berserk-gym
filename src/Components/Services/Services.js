import React from "react";
import {
  FaArrowRight,
  FaDumbbell,
  FaHeartbeat,
  FaFire,
  FaWeight,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <div className="services text-center">
      <div className="blur blur-services"></div>
      <div className="heading-big">EXPLORE OUR SERVICES</div>
      <div className="heading-small">FOR A BETTER AND HEALTHY LIFESTYLE</div>
      <div className="container-fluid">
        <div className="row no-gutters justify-content-around">
          {/* Strength Training */}
          <div
            id="strength-training"
            className="card-custom col-lg-3 col-md-6 col-sm-12 text-left" // Add text-left class
          >
            <div className="card-icon">
              <FaDumbbell />
            </div>
            <div className="card-heading">Strength Training</div>
            <div className="card-description">
              Build strength and endurance with our personalized strength
              training programs. Our expert trainers will guide you through
              effective workouts tailored to your fitness goals.
            </div>
            <div className="join-now">
              Join Now <FaArrowRight />
            </div>
          </div>

          {/* Cardio */}
          <div
            id="cardio"
            className="card-custom col-lg-3 col-md-6 col-sm-12 text-left" // Add text-left class
          >
            <div className="card-icon">
              <FaHeartbeat />
            </div>
            <div className="card-heading">Cardio</div>
            <div className="card-description">
              Boost your cardiovascular health with our dynamic cardio workouts.
              Whether you prefer running, cycling, or high-intensity interval
              training, we've got the perfect cardio exercises for you.
            </div>
            <div className="join-now">
              Join Now <FaArrowRight />
            </div>
          </div>

          {/* Crossfit */}
          <div
            id="crossfit"
            className="card-custom col-lg-3 col-md-6 col-sm-12 text-left" // Add text-left class
          >
            <div className="card-icon">
              <FaFire />
            </div>
            <div className="card-heading">Crossfit</div>
            <div className="card-description">
              Experience the intensity of Crossfit training. Our Crossfit
              programs combine strength, agility, and endurance exercises to
              push your limits and achieve peak fitness.
            </div>
            <div className="join-now">
              Join Now <FaArrowRight />
            </div>
          </div>

          {/* Fat Loss */}
          <div
            id="fat-loss"
            className="card-custom col-lg-3 col-md-6 col-sm-12 text-left" // Add text-left class
          >
            <div className="card-icon">
              <FaWeight />
            </div>
            <div className="card-heading">Fat Loss</div>
            <div className="card-description">
              Shed excess fat and achieve your weight loss goals with our
              targeted fat loss programs. Our trainers will guide you through
              effective workouts for lasting results.
            </div>
            <div className="join-now">
              Join Now <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
