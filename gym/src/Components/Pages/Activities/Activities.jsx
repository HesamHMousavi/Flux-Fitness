import React from "react";
import Header from "../../Header/Header";
import activities from "../../../Imgs/activities.jpg";
import HowToBook from "./HowToBook";
import Footer from "../../Footer/Footer";
import FacilitiesGrid from "./FacilitiesGrid";
import Grid from "./Grid";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="Activities">
      <div className="border-bottom-1">
        <Header />
      </div>
      <header className="header-img-con">
        <img src={activities} alt="" />
      </header>
      <div className="max-width">
        <FacilitiesGrid />
      </div>
      <div className="max-width">
        <Grid />
        <HowToBook />
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
