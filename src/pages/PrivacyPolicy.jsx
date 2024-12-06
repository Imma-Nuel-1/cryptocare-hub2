import React from "react";
import styled from "styled-components";

const PrivacyPolicyContainer = styled.section`
  padding: 2rem 4rem;
  background-color: #f9fafb;
  color: #1e293b;
  font-family: Arial, sans-serif;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2563eb;
  }

  h2 {
    font-size: 2rem;
    margin-top: 1.5rem;
    color: #1e293b;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #475569;
  }

  ul {
    list-style-type: disc;
    padding-left: 2rem;
    font-size: 1.2rem;
  }

  ul li {
    margin-bottom: 1rem;
  }

  .contact-info {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #475569;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our website. We are committed to
        safeguarding your privacy online.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of information when you use our
        website:
      </p>
      <ul>
        <li>Personal Identification Information (e.g., name, email address)</li>
        <li>Usage Data (e.g., browsing behavior, device information)</li>
        <li>Cookies and Tracking Technologies</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>The information we collect may be used in the following ways:</p>
      <ul>
        <li>To personalize your experience and improve our website</li>
        <li>To respond to customer service requests</li>
        <li>
          To send periodic emails regarding your account or other
          products/services
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information. However, please note that no method of
        transmission over the internet is 100% secure, and we cannot guarantee
        the absolute security of your information.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personally
        identifiable information to third parties unless we provide users with
        advance notice. This does not include website hosting partners and other
        parties who assist us in operating our website, conducting our business,
        or serving our users, so long as those parties agree to keep this
        information confidential.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request corrections to any inaccurate or incomplete data</li>
        <li>
          Request the deletion of your personal data (subject to certain
          exceptions)
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use cookies to enhance your experience. Cookies are small files that
        are stored on your device to help us analyze website traffic and
        remember your preferences. You can disable cookies through your browser
        settings, but this may affect your ability to use some features of our
        website.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update or change this Privacy Policy at any
        time. If we make any significant changes, we will notify you by posting
        the new Privacy Policy on this page with an updated "Last Updated" date.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions regarding this Privacy Policy or your data
        privacy, please contact us at:
      </p>
      <div className="contact-info">
        <p>Email: support@cryptocarehub.com</p>
      </div>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;
