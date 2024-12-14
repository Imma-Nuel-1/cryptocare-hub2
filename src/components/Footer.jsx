import React from "react";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: black;
  padding: 2rem 0;
  text-align: center;
  min-height: 100px;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }
`;

const Copyright = styled.div`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #94a3b8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Links */}
        <FooterLinks>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
        </FooterLinks>

        {/* Copyright Notice */}
        <Copyright>
          <p>
            &copy; {new Date().getFullYear()} CryptoCare Hub. All Rights
            Reserved.
          </p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
