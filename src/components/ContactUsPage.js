import React, { useState } from "react";
import "../styles/ContactUsPage.css"; // Nouveau fichier CSS

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre message a été envoyé !");
  };

  return (
    <div className="simple-contact-page">
      <div className="simple-contact-container">
        {/* Section gauche */}
        <div className="simple-contact-info">
          <h3>Contact Information</h3>
          <p>We’ll create high-quality linkable content and build at least 40 high-authority links to each asset.</p>
          <p>📞 +88017777777766</p>
          <p>📧 support@upagency.com</p>
          <p>📍 New York, USA</p>
        </div>

        {/* Section droite */}
        <div className="simple-contact-form-container">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;