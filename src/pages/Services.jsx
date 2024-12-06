import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ServiceCard from "../components/ServiceCard";

const ServicesPageContainer = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: #fafafa;
`;

const ServicesHeader = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;
`;

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName) => {
    console.log(`Redirecting to Wallet Selection for ${serviceName}...`);
    navigate("/wallet-selection", { state: { service: serviceName } });
  };

  return (
    <ServicesPageContainer>
      <ServicesHeader>Our Services</ServicesHeader>
      <ServicesGrid>
        <ServiceCard
          title="Wallet Recovery"
          description="Secure and reliable recovery of your crypto wallets."
          onClick={() => handleServiceClick("Wallet Recovery")}
        />
        <ServiceCard
          title="Token Restoration"
          description="Restore lost or forgotten tokens securely."
          onClick={() => handleServiceClick("Token Restoration")}
        />
        <ServiceCard
          title="Buying and Selling"
          description="A secure platform for crypto buying and selling."
          onClick={() => handleServiceClick("Buying and Selling")}
        />
        <ServiceCard
          title="Staking"
          description="Stake your crypto to earn rewards over time."
          onClick={() => handleServiceClick("Staking")}
        />
        <ServiceCard
          title="Unstaking"
          description="Easily unstake your crypto assets when needed."
          onClick={() => handleServiceClick("Unstaking")}
        />
        <ServiceCard
          title="Claim Rewards"
          description="Claim your crypto rewards with ease and security."
          onClick={() => handleServiceClick("Claim Rewards")}
        />
        <ServiceCard
          title="Airdrop Management"
          description="Manage and claim crypto airdrops seamlessly."
          onClick={() => handleServiceClick("Airdrop Management")}
        />
        <ServiceCard
          title="DeFi Consultation"
          description="Expert guidance on decentralized finance projects."
          onClick={() => handleServiceClick("DeFi Consultation")}
        />
      </ServicesGrid>
    </ServicesPageContainer>
  );
};

export default Services;
