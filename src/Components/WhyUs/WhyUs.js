import React from "react";
import "./WhyUs.css";
import WhyUsReasons from "./WhyUsReasons";
import WhyUsGallery from "./WhyUsGallery";

const WhyUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="#why-us">WHY BERSERK?</div>
        <div className="row justify-content-around">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <WhyUsReasons />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <WhyUsGallery />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
