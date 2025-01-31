import React from "react";
import Header from "../../Header/Header";
import Hero from "./Hero";
import Banner from "./Banner";
import PopAct from "./PopAct";
import FitnessBanner from "../../Banner/FitnessBanner";
import Footer from "../../Footer/Footer";
import Reviews from "../../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div className="border-bottom-1">
        <Header />
      </div>
      <Hero />
      <Banner />
      <PopAct />
      <Reviews />
      <FitnessBanner />
      <Footer />
    </div>
  );
};

export default Home;
