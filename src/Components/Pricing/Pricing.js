import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing text-center">
      <div className="pricing-heading">OUR PRICING</div>
      <div className="container pricing text-center">
        <div className="blur blur-pricing"></div>
        <div className="row justify-content-center align-items-center">
          {/* Basic Plan */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card pricing-card">
              <div className="card-body">
                <h5 className="pricing-title">Newbie Plan</h5>
                <p className="price ">$19.99/month</p>
                <ul className="list-unstyled ">
                  <li>20 Limit min Cardio </li>
                  <li>No Access to Yoga Classes</li>
                  <li>Access to all weights</li>
                  <li>Limited consultation</li>
                  <li>Personalized Nutrition Plan</li>
                </ul>
                <br />
                <button className="btn btn-custom">Get Started</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card pricing-card standard">
              <div className="card-body">
                <h5 className="pricing-title ">Gymbro Plan</h5>
                <p className="price ">$39.99/month</p>
                <ul className="list-unstyled">
                  <li>No Limit on Cardio </li>
                  <li>Limited Yoga Classes</li>
                  <li>Access to all weights</li>
                  <li>Persolized consultation</li>
                  <li>Personalized Nutrition Plan</li>
                </ul>
                <br />
                <button className="btn btn-custom">Get Started</button>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card pricing-card">
              <div className="card-body">
                <h5 className="pricing-title ">Hardcore Plan</h5>
                <p className="price ">$59.99/month</p>
                <ul className="list-unstyled">
                  <li>Unlimited Cardio </li>
                  <li>Directed Yoga Classes</li>
                  <li>Access to all weights</li>
                  <li>Persolized consultation</li>
                  <li>Personalized Nutrition Plan</li>
                </ul>
                <br />
                <button className="btn btn-custom">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
