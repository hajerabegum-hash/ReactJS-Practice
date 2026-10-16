// const Contact = () => {
//   return <div>I m Contact us page</div>;
// };
// export default Contact;

import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[- ]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.date) newErrors.date = "Please select a date";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "2",
        date: "",
        message: "",
      });

      // Simulate API submission
      console.log("Form Data Submitted Successfully:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact & Reservations</h1>
        <p>
          We would love to hear from you. Book a table or drop us a message!
        </p>
      </div>

      <div className="contact-wrapper">
        {/* Left Side: Info & Map */}
        <div className="contact-info-section">
          <div className="info-card">
            <h3>Our Location</h3>
            <p>123 Gourmet Avenue, Foodie District</p>
            <p>New York, NY 10001</p>
          </div>

          <div className="info-card">
            <h3>Hours of Operation</h3>
            <p>
              <strong>Monday - Thursday:</strong> 11:35 AM - 10:00 PM
            </p>
            <p>
              <strong>Friday - Saturday:</strong> 11:35 AM - 11:00 PM
            </p>
            <p>
              <strong>Sunday:</strong> 12:00 PM - 9:00 PM
            </p>
          </div>

          <div className="info-card">
            <h3>Get In Touch</h3>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> reservations@bistrodelight.com
            </p>
          </div>

          {/* Simulated Google Map Container */}
          <div className="map-container">
            <div className="mock-map">
              {
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30478.97133882792!2d78.46302105000001!3d17.273454649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbccc2f558441%3A0xf3cc27abb40e5f29!2sPahadi%20Shareef%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1792149737229!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{border:0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
              }
              {/* <a href=" https://maps.app.goo.gl/UvV4un8QtEKvvuuV6"> </a> */}
              {/* <span>[ Interactive Google Map Placeholder ]</span> */}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-section">
          <h2>Book a Table / Inquire</h2>

          {submitted && (
            <div className="success-alert">
              Thank you! Your request has been sent. We will confirm shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error-input" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""}
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error-input" : ""}
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="9+">9+ (Large Party)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? "error-input" : ""}
                />
                {errors.date && (
                  <span className="error-text">{errors.date}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Special Requests / Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Allergies, high chair needs, dietary preferences..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
