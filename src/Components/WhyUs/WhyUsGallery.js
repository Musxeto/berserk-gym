import React from "react";
import { Row, Col } from "react-bootstrap";

const WhyUsGallery = () => {
  return (
    <Row className="gallery">
      <Col lg={4} md={6} sm={12} className="mb-3">
        <img
          className="img-fluid"
          src="https://placekitten.com/800/400" // Replace with your image URL
          alt="Gallery Image 1"
        />
      </Col>
      <Col lg={4} md={6} sm={12} className="mb-3">
        <img
          className="img-fluid"
          src="https://placekitten.com/800/401" // Replace with your image URL
          alt="Gallery Image 2"
        />
      </Col>
      <Col lg={4} md={6} sm={12} className="mb-3">
        <img
          className="img-fluid"
          src="https://placekitten.com/800/402" // Replace with your image URL
          alt="Gallery Image 3"
        />
      </Col>
      <Col lg={4} md={6} sm={12} className="mb-3">
        <img
          className="img-fluid"
          src="https://placekitten.com/800/403" // Replace with your image URL
          alt="Gallery Image 4"
        />
      </Col>
      <Col lg={4} md={6} sm={12} className="mb-3">
        <img
          className="img-fluid"
          src="https://placekitten.com/800/404" // Replace with your image URL
          alt="Gallery Image 5"
        />
      </Col>
    </Row>
  );
};

export default WhyUsGallery;
