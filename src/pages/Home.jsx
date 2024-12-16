import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Styled Components
const HeroSection = styled.section`
  height: 100vh;
  background-image: url("/Home.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;

  h1 {
    font-size: 4vw; /* Using viewport width for responsive font size */
    margin-bottom: 1rem;
    line-height: 1.2; /* Adjust line height for better spacing */
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    max-width: 600px; /* Ensures text doesn't stretch too wide on large screens */
  }

  button {
    padding: 1rem 2rem;
    background: #38bdf8;
    border: none;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.3s ease;
    &:hover {
      background: #2563eb;
    }
  }

  /* Media queries for smaller screens */
  @media (max-width: 768px) {
    h1 {
      font-size: 6vw; /* Smaller font size on smaller screens */
    }

    p {
      font-size: 1.2rem;
      padding: 0 10px; /* Add padding to avoid text touching edges */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 8vw; /* Even smaller font size on very small screens */
    }

    p {
      font-size: 1rem;
    }
  }
`;

const FeaturesSection = styled.section`
  padding: 40px 20px;
  background: #f8f9fa;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .features-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;

    .feature-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 300px;
      text-align: left;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        color: #666;
      }
    }
  }
`;

const CryptoSection = styled.section`
  padding: 40px 20px;
  background: #fff;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .crypto-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;

    .crypto-card {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 200px;
      text-align: center;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 5px;
      }

      p {
        margin: 5px 0;
        font-size: 1rem;
        color: #555;
      }
    }
  }
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInUp 0.5s forwards;
  animation-delay: ${(props) => props.delay};

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 4,
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching crypto prices", error);
      }
    };

    fetchCryptoPrices();
  }, []);

  const handleGetStarted = () => {
    navigate("/services");
  };

  const text = "Restoring Wallets, Rebuilding Trust";

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <h1>
          {text.split("").map((letter, index) => (
            <Letter key={index} delay={`${index * 0.1}s`}>
              {letter}
            </Letter>
          ))}
        </h1>
        <p>
          Your trusted partner for wallet recovery, token restoration, and
          secure crypto solutions.
        </p>
        <button onClick={handleGetStarted}>Get Started</button>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Wallet Recovery</h3>
            <p>Securely recover lost or forgotten crypto wallets.</p>
          </div>
          <div className="feature-card">
            <h3>Token Restoration</h3>
            <p>Retrieve your tokens safely with our expert help.</p>
          </div>
          <div className="feature-card">
            <h3>Buying & Selling</h3>
            <p>Seamlessly trade cryptocurrencies on our platform.</p>
          </div>
          <div className="feature-card">
            <h3>Staking Rewards</h3>
            <p>Earn rewards by staking your favorite cryptocurrencies.</p>
          </div>
        </div>
      </FeaturesSection>

      {/* Crypto Prices Section */}
      <CryptoSection>
        <h2>Live Crypto Prices</h2>
        <div className="crypto-list">
          {cryptoData.length > 0 ? (
            cryptoData.map((crypto) => (
              <div className="crypto-card" key={crypto.id}>
                <h3>{crypto.name}</h3>
                <p>Price: ${crypto.current_price.toFixed(2)}</p>
                <p>
                  24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            ))
          ) : (
            <p>Loading live crypto prices...</p>
          )}
        </div>
      </CryptoSection>
    </>
  );
};

export default Home;
