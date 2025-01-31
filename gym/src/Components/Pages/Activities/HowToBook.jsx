import React from "react";
import "./HowToBook.css"; // Import the CSS file

const HowToBook = () => {
  return (
    <div className="container">
      <h2 className="h2-mid mgt-2 mgb-2">How to Book</h2>
      <div className="steps-container">
        <Step
          number="1"
          title="Create Account"
          description="Sign up for a free account"
        />
        <Step
          number="2"
          title="Choose Activity"
          description="Select your preferred activity and time"
        />
        <Step
          number="3"
          title="Confirm & Pay"
          description="Complete your booking"
        />
      </div>
    </div>
  );
};

const Step = ({ number, title, description }) => {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </div>
  );
};

export default HowToBook;
