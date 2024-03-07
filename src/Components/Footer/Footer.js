// Footer.js

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [showAlert, setShowAlert] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: formData.email,
      message: `Hello ${formData.name}, welcome to our platform!`,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_ssbja3n",
        "template_bueuosd",
        templateParams,
        "6rwjy902I7gOMv6HA"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setShowAlert({
            type: "success",
            message: "Email sent successfully!",
          });
        },
        (error) => {
          console.error("Email failed to send:", error);
          setShowAlert({
            type: "danger",
            message: "Email failed to send. Please try again later.",
          });
        }
      );

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="row">
          {/* Contact Us */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Address:</strong> S-69/2 - Berserk Gym, Grove Street, Los
              Santos.
              <br />
              <strong>Email:</strong> berserkgym@real.com
              <br />
              <strong>Phone:</strong> +92 69 69 42069
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates and special offers.</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="subscribe-btn"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary btn-custom"
                    id="subscribe-btn"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Follow Us */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="https://linkedin.com/in/mustafa-gm" target="_blank">
                  <div className="icon">
                    <FaLinkedin />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/musxeto" target="_blank">
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bootstrap Alert */}
      {showAlert.type && showAlert.message && (
        <div
          className={`alert alert-${showAlert.type} custom-alert alert-dismissible fade show`}
          role="alert"
        >
          {showAlert.message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowAlert({ type: "", message: "" })}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div title="contribute" className="container justify-content-center">
          <a href="https://github.com/musxeto/berserk-gym.git" target="_blank">
            &copy; {new Date().getFullYear()} Musxeto <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
