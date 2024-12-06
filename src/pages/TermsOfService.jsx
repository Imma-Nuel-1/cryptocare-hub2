import React from "react";
import styled from "styled-components";

// Styled Components for Terms of Service Page
const TermsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9fafb;
  color: #1e293b;
  max-width: 900px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    color: #2563eb;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    color: #1e293b;
    margin-top: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #475569;
  }

  ul {
    margin-left: 2rem;
    list-style-type: disc;
  }

  ul li {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #475569;
  }
`;

const TermsOfService = () => {
  return (
    <TermsContainer>
      <h1>Terms of Service</h1>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using this website, you agree to be bound by these
        Terms of Service and all applicable laws and regulations. If you do not
        agree with these terms, please do not use our services.
      </p>

      <h2>2. Changes to Terms</h2>
      <p>
        We reserve the right to modify or revise these Terms of Service at any
        time. You are encouraged to review this page periodically for any
        updates. Your continued use of the website following the posting of
        changes will constitute your acceptance of those changes.
      </p>

      <h2>3. Use of the Website</h2>
      <p>
        You agree to use the website for lawful purposes only and not to engage
        in any conduct that could damage, disable, overburden, or impair the
        functionality of the website or interfere with other users' access to
        the website.
      </p>

      <h2>4. User Content</h2>
      <p>
        You are responsible for the content you post on our website. By
        submitting content, you grant us a non-exclusive, royalty-free,
        worldwide license to use, modify, and distribute such content.
      </p>

      <h2>5. Privacy Policy</h2>
      <p>
        Your use of our website is also governed by our Privacy Policy. Please
        review it to understand how we collect and use your information.
      </p>

      <h2>6. Prohibited Activities</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website for any illegal or unauthorized purposes.</li>
        <li>Attempt to gain unauthorized access to any system or data.</li>
        <li>
          Engage in any activity that disrupts or interferes with the website's
          operations.
        </li>
        <li>
          Use automated tools to collect data or interact with the website.
        </li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <p>
        In no event shall we be liable for any damages arising out of your use
        of the website, including but not limited to direct, indirect,
        incidental, punitive, and consequential damages.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance
        with the laws of [Your Country/State], without regard to its conflict of
        law principles.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at{" "}
        <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a>.
      </p>
    </TermsContainer>
  );
};

export default TermsOfService;
