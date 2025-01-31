import React from "react";
import img from "../../../Imgs/img1.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero max-width flex-row-between mgt-2">
      <div className="left flex-column-center ">
        <h1 className="h1-hi">
          Your Journey To <span className="text-color-blue">Fitness </span>{" "}
          Starts Here
        </h1>
        <h5 className="h5-mid mgt-1">
          Experience world-class facilities and expert guidance for your fitness
          goals
        </h5>
        <div className="flex mgt-1">
          <button className="btn mgr-5px">Get Started</button>
          <button className="btn-fill">View Activities</button>
        </div>
      </div>
      <div className="right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
