import React from "react";
import "./LoginForm.css"; // Import the CSS file

const LoginForm = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back</h2>
      <form className="login-form">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="login-input"
        />

        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="login-input"
        />

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" /> Remember me
          </label>
          <a href="/" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>

        <p className="signup-text">
          Don't have an account?{" "}
          <a href="/" className="signup-link">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
