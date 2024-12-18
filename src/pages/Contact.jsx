import React, { useState } from "react";
import styled from "styled-components";
// import emailjs from "emailjs-com"; // Install via `npm install emailjs-com`

// Styled Components
const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f9fafb;
  color: #1e293b;

  h1 {
    font-size: 2.5rem;
    color: #2563eb;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 3rem auto;
    color: #475569;
    text-align: center;
  }

  .contact-form {
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .form-field {
    margin-bottom: 1.5rem;
    width: 100%;
  }

  label {
    display: block;
    font-size: 1rem;
    color: #475569;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    color: #475569;
    outline: none;
  }

  input:focus,
  textarea:focus {
    border-color: #2563eb;
  }

  button {
    padding: 10px 20px; // Padding inside the button
    background-color: #2563eb;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    display: block;
    margin: 20px auto;
  }

  button:hover {
    background-color: #1d4ed8;
  }

  .contact-details {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    gap: 2rem;
    font-size: 1.2rem;
  }

  .contact-detail {
    text-align: center;
  }

  .contact-detail p {
    color: #475569;
  }

  .live-chat {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
    color: #2563eb;
    cursor: pointer;
  }

  .live-chat:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    walletIssue: "",
    message: "",
  });

  const [isLiveChatOpen, setLiveChatOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email data
    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      wallet_issue: formData.walletIssue,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          alert("Your message has been sent!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  const openLiveChat = () => {
    setLiveChatOpen(true);
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>
        Need assistance with your wallet issue or have a general question? Fill
        out the form below and we'll get back to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="walletIssue">Wallet Issue</label>
          <input
            type="text"
            id="walletIssue"
            name="walletIssue"
            value={formData.walletIssue}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <div className="contact-detail">
          <h3>Email</h3>
          <p>support@cryptocarehub.com</p>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
