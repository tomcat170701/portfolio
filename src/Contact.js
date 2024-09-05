import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_efw3rsb', // Replace with your EmailJS service ID
        'template_0rvirmj', // Replace with your EmailJS template ID
        formData,
        'TR-NyiVjg3UFm1i8N' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
        }
      );

    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact <span className="highlight">Me</span></h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
