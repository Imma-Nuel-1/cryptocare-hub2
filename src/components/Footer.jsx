import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: black;
  padding: 2rem 0;
  text-align: center;
  min-height: 100px;
  position: relative;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 1rem;
  }

  .footer-link {
    color: #94a3b8;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  .footer-link:hover {
    color: #2563eb;
  }
  .copyright {
    margin-top: 1.5rem;
    font-size: 0.875rem;
    color: #94a3b8;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        {/* Links */}
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
          <a href="/faq" className="footer-link">
            FAQ
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} CryptoCare Hub. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
