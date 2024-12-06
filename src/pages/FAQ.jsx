import React from "react";

const FAQ = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>What is your service?</h2>
        <p>
          We provide top-notch support and services to help our customers with
          their needs.
        </p>
      </div>
      <div className="faq-item">
        <h2>How do I contact support?</h2>
        <p>
          You can contact support via the "Contact Us" page or by emailing
          support@example.com.
        </p>
      </div>
      <div className="faq-item">
        <h2>Is my personal information safe with you?</h2>
        <p>
          Yes, we take your privacy seriously. We use encryption and other
          security measures to protect your data.
        </p>
      </div>
      <div className="faq-item">
        <h2>What if I am charged incorrectly?</h2>
        <p>
          If you believe you've been charged incorrectly, please contact our
          support team immediately with the details of the issue, and we will
          investigate.
        </p>
      </div>
      <div className="faq-item">
        <h2>Do you offer customer support in multiple languages?</h2>
        <p>
          Currently, our support team provides assistance in English, Spanish,
          and French. If you need help in another language, please contact us.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
