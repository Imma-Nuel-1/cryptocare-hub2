import React from "react";
import styled from "styled-components";

// Styled Components
const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  background-color: #f9fafb;
  color: #1e293b;

  h1 {
    font-size: 2.5rem;
    color: #2563eb;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 2rem auto;
    color: #475569;
    text-align: center;
  }

  .mission {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin-top: 2rem;
  }

  .values {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;

    .value-card {
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1.5rem;
      width: 300px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h3 {
        color: #2563eb;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        color: #475569;
      }
    }
  }
`;

// React Component
const About = () => (
  <AboutContainer>
    <h1>About CryptoCare Hub</h1>
    <p>
      At CryptoCare Hub, we specialize in providing expert solutions to recover
      lost or inaccessible crypto wallets, restore tokens, and ensure smooth
      operations in the blockchain ecosystem. Our mission is to rebuild trust
      and confidence in cryptocurrency for everyone.
    </p>

    <p className="mission">Our Mission</p>
    <p>
      To provide reliable and secure wallet recovery services while educating
      users about the importance of safeguarding their crypto assets.
    </p>

    <div className="values">
      <div className="value-card">
        <h3>Security First</h3>
        <p>
          We employ the latest security protocols to ensure your data and funds
          are handled with the utmost care.
        </p>
      </div>

      <div className="value-card">
        <h3>Transparency</h3>
        <p>
          Our processes are transparent, with step-by-step updates, so you
          always know what’s happening.
        </p>
      </div>

      <div className="value-card">
        <h3>Customer-Centric</h3>
        <p>
          Your satisfaction is our top priority. We tailor our services to
          address your unique wallet issues.
        </p>
      </div>

      <div className="value-card">
        <h3>Success Stories</h3>
        <p>
          We’ve successfully helped thousands of clients regain access to their
          crypto wallets, earning their trust along the way.
        </p>
      </div>
    </div>
  </AboutContainer>
);

export default About;
