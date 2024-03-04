import React from "react";
import "./WhyUs.css";
import WhyUsReasons from "./WhyUsReasons";
import WhyUsGallery from "./WhyUsGallery";

const WhyUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="why-us text-center">
          <div className="blur why-us-blur"></div>
          <div className="why-us-heading">Why Berserk?</div>
        </div>
        <br />
        <div className="row justify-content-around">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <WhyUsGallery />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <WhyUsReasons />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
