import React from "react";
import Header from "../../Header/Header";
import SignUpForm from "./SignUpForm";
import Footer from "../../Footer/Footer";
import signup from "../../../Imgs/signup.jpg";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="border-bottom-1">
        <Header />
      </div>
      <div className="max-width">
        <h1 className="text-center  mgt-5">Sign Up </h1>
      </div>
      <div className="flex sign-up max-width">
        <div className="left flex-row-center">
          <img src={signup} alt="" />
        </div>
        <div className="right flex-row-center">
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
