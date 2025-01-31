import React from "react";
import "./FitnessBanner.css"; // Import the CSS file

const FitnessBanner = () => {
  return (
    <div className="bg-blue">
      <div className="fitness-banner flex-column-center max-width">
        <h2 className="h2-mid text-color-white">
          Ready to Start Your Fitness Journey?
        </h2>
        <h3 className="h3-light text-color-white mgt-1 mgb-1">
          Join us today and transform your life with our world-class facilities
        </h3>
        <button className="btn-fill">Sign Up Now</button>
      </div>
    </div>
  );
};

export default FitnessBanner;
