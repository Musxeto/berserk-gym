import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyUsGallery.css"; // Import the custom CSS file

const WhyUsGallery = () => {
  document.addEventListener("scroll", function () {
    var firstImage = document.querySelector(".first");
    var secondImage = document.querySelector(".second");

    // Check if the element is in the viewport
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Add the 'animated' class when the element is in the viewport
    if (isInViewport(firstImage)) {
      firstImage.classList.add("animated");
    }

    if (isInViewport(secondImage)) {
      secondImage.classList.add("animated");
    }
  });
  return (
    <Container>
      <Row>
        {/* First Picture - Covers Complete Row */}
        <Col xs={8}>
          <img
            src="https://www.villagegym.co.uk/media/5752/jebson-74.jpg"
            alt="First Image"
            className="img-fluid first custom-img"
          />
        </Col>
        <Col xs={4}>
          <img
            src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uYWwlMjB0cmFpbmVyfGVufDB8fDB8fHww"
            alt="second Image"
            className="img-fluid second custom-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUsGallery;
