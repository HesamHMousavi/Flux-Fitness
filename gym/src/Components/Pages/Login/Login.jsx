import React from "react";
import Header from "../../Header/Header";
import login from "../../../Imgs/login.jpg";
import "./Login.css";
import LoginForm from "./LoginForm";
import Footer from "../../Footer/Footer";

const Login = () => {
  return (
    <div>
      <div className="border-bottom-1">
        <Header />
      </div>
      <div className="max-width">
        <h1 className="text-center mgt-5">Login </h1>
      </div>
      <div className="flex login max-width ">
        <div className="left flex-row-center">
          <img src={login} alt="" />
        </div>
        <div className="right flex-row-center">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
