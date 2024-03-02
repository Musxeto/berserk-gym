import React, { useState } from "react";
import "./SignUpModal.css"; // Import the custom CSS file
import emailjs from "emailjs-com";

function SignUpModal() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: formData.email,
      message: `Hello ${formData.name}, welcome to our platform!`,
      reply_to: formData.email, // Using the submitted email as the reply-to
    };

    emailjs
      .send(
        "service_gvsihj8",
        "template_bueuosd",
        templateParams,
        "6rwjy902I7gOMv6HA"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setShowAlert(true);
        },
        (error) => {
          console.error("Email failed to send:", error);
          setShowAlert(true);
        }
      );
  };

  return (
    <div
      className="modal fade"
      id="SignUpModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Sign Up</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {showAlert && (
              <div
                className="alert alert-success custom-alert alert-dismissible fade show"
                role="alert"
              >
                Success! Check your email for the signup procedure.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
            <form id="signupForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
