import React, { useState } from 'react'; 
import '../index.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset the form fields
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message"
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      <footer className="footer">
        <p>&copy; 2024 Lady Kay's Stationery Company</p>
        <p>Contact us at: <a href="mailto:kendynkosi18063@gmail.com">kendynkosi18063@gmail.com</a></p>
        <p>Phone: <a href="tel:+27683815981">+(27) 683 815 981</a></p>
      </footer>
    </div>
  );
};

export default Contact;
