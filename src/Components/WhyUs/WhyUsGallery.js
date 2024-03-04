import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyUsGallery.css"; // Import the custom CSS file

const WhyUsGallery = () => {
  return (
    <Container>
      <Row>
        {/* First Picture - Covers Complete Row */}
        <Col xs={12}>
          <img
            src="https://png.pngtree.com/background/20230516/original/pngtree-gym-with-many-weights-in-dark-lighting-picture-image_2611113.jpg"
            alt="First Image"
            className="img-fluid custom-img"
          />
        </Col>
      </Row>
      <Row>
        {/* Second Picture - Half Row */}
        <Col xs={6}>
          <img
            src="https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg"
            alt="Second Image"
            className="img-fluid custom-img"
          />
        </Col>
        {/* Third Picture - Half Row */}
        <Col xs={6}>
          <img
            src="https://img.freepik.com/photos-premium/photo-jeune-homme-s-entrainant-dans-salle-sport_763111-16971.jpg"
            alt="Third Image"
            className="img-fluid custom-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUsGallery;
