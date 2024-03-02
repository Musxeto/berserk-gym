import React, { useState, useEffect } from "react";
import "./NavHead.css"; // Import the CSS file

function NavHead() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set background based on scroll position
      if (scrollY > 50) {
        setNavbarBg("bg-black");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${navbarBg} fixed-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/berserk-gym.png" alt="gym logo" className="img-fluid" />
        </a>
        <button
          className={`navbar-toggler ${isNavOpen ? "open" : ""}`}
          type="button"
          onClick={toggleNav}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link why-us" href="#">
                Why us?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <a href="#" className="btn-join-now">
            Join Now <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavHead;
