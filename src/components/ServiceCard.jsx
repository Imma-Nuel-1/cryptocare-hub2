// src/components/ServiceCard.jsx
import React from "react";
import styled from "styled-components";

const ServiceCardContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ServiceCard = ({ title, description, onClick }) => {
  return (
    <ServiceCardContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>CHOOSE</button>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
