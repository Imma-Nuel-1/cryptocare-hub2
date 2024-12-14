import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to track window width
  const navigate = useNavigate();

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Inline styles
  const heroSectionStyle = {
    height: "100vh",
    background: `url("/Images/Home.jpg") center/cover no-repeat`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "0 20px",
  };

  const headingStyle = {
    fontSize: windowWidth <= 480 ? "8vw" : windowWidth <= 768 ? "6vw" : "4vw", // Adjust font size based on window width
    marginBottom: "1rem",
    lineHeight: 1.2,
  };

  const paragraphStyle = {
    fontSize:
      windowWidth <= 480 ? "1rem" : windowWidth <= 768 ? "1.2rem" : "1.5rem",
    marginBottom: "2rem",
    maxWidth: "600px",
    padding: windowWidth <= 768 ? "0 10px" : "0",
  };

  const buttonStyle = {
    padding: "1rem 2rem",
    background: "#38bdf8",
    border: "none",
    color: "white",
    fontSize: "1.2rem",
    borderRadius: "5px",
    transition: "0.3s ease",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    background: "#2563eb",
  };

  const featuresSectionStyle = {
    padding: "40px 20px",
    background: "#f8f9fa",
    textAlign: "center",
  };

  const featureCardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: windowWidth <= 480 ? "100%" : "300px",
    textAlign: "left",
  };

  const cryptoSectionStyle = {
    padding: "40px 20px",
    background: "#fff",
  };

  const cryptoCardStyle = {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: windowWidth <= 480 ? "100%" : "200px",
    textAlign: "center",
  };

  return (
    <>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1 style={headingStyle}>
          {text.split("").map((letter, index) => (
            <span
              key={index}
              style={{
                opacity: 0,
                transform: "translateY(-20px)",
                animation: `fadeInUp 0.5s forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p style={paragraphStyle}>
          Your trusted partner for wallet recovery, token restoration, and
          secure crypto solutions.
        </p>
        <button
          onClick={handleGetStarted}
          style={{ ...buttonStyle, ":hover": buttonHoverStyle }}
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        <h2>Our Features</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={featureCardStyle}>
            <h3>Wallet Recovery</h3>
            <p>Securely recover lost or forgotten crypto wallets.</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Token Restoration</h3>
            <p>Retrieve your tokens safely with our expert help.</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Buying & Selling</h3>
            <p>Seamlessly trade cryptocurrencies on our platform.</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Staking Rewards</h3>
            <p>Earn rewards by staking your favorite cryptocurrencies.</p>
          </div>
        </div>
      </section>

      {/* Crypto Prices Section */}
      <section style={cryptoSectionStyle}>
        <h2>Live Crypto Prices</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {cryptoData.length > 0 ? (
            cryptoData.map((crypto) => (
              <div style={cryptoCardStyle} key={crypto.id}>
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
      </section>
    </>
  );
};

export default Home;
