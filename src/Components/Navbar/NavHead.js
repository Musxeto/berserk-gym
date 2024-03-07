import React, { useState, useEffect } from "react";
import SignUpModal from "./SignUpModal.js";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./NavHead.css";

function NavHead() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 30) {
        setNavbarBg("bg-black");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
    if (isNavOpen === false) setNavbarBg("bg-black");
    if (isNavOpen === true && window.scrollY < 30)
      setNavbarBg("bg-transparent");

    // Close the navbar when a link is clicked
    if (isNavOpen) {
      setNavOpen(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <nav className={`navbar navbar-expand-md ${navbarBg} fixed-top`}>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="no-deco"
            >
              <a className="navbar-brand" onClick={scrollToTop}>
                <img
                  src="/berserk-gym.png"
                  alt="gym logo"
                  className="img-fluid logo"
                />
              </a>
            </ScrollLink>
            <button
              className={`navbar-toggler navbar-toggler-light ${
                isNavOpen ? "open" : ""
              }`}
              type="button"
              onClick={toggleNav}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="no-deco"
                >
                  <a
                    className={`nav-link active ${
                      navbarBg === "bg-black" ? "text-light" : ""
                    }`}
                  >
                    Home
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="why-us"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="no-deco"
                >
                  <a
                    className={`nav-link why-us ${
                      navbarBg === "bg-black" ? "text-light" : ""
                    }`}
                  >
                    Why us?
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="no-deco"
                >
                  <a
                    className={`nav-link why-us ${
                      navbarBg === "bg-black" ? "text-light" : ""
                    }`}
                  >
                    Services
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="no-deco"
                >
                  <a
                    className={`nav-link why-us ${
                      navbarBg === "bg-black" ? "text-light" : ""
                    }`}
                  >
                    Gallery
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="no-deco"
                >
                  <a
                    className={`nav-link why-us ${
                      navbarBg === "bg-black" ? "text-light" : ""
                    }`}
                  >
                    Pricing
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="no-deco"
                >
                  <a
                    className={`nav-link why-us ${
                      navbarBg === "bg-black" ? "text-light" : ""
                    }`}
                  >
                    Testimonials
                  </a>
                </ScrollLink>
              </li>
            </ul>
            <button
              className="btn-join-now"
              data-bs-toggle="modal"
              data-bs-target="#SignUpModal"
            >
              Join Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </nav>
      <SignUpModal />
    </>
  );
}

export default NavHead;
