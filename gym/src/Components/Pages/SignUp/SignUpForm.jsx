import React from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Create Account</h2>
      <form className="signup-form">
        <div className="name-fields">
          <div className="input-group">
            <label htmlFor="firstName" className="signup-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              className="signup-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName" className="signup-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              className="signup-input"
            />
          </div>
        </div>

        <label htmlFor="email" className="signup-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="signup-input"
        />

        <label htmlFor="password" className="signup-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          className="signup-input"
        />

        <label htmlFor="confirmPassword" className="signup-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          className="signup-input"
        />

        <div className="signup-options">
          <label className="terms-checkbox">
            <input type="checkbox" /> I agree to the{" "}
            <a href="/" className="terms-link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/" className="terms-link">
              Privacy Policy
            </a>
          </label>
        </div>

        <button type="submit" className="signup-button">
          Create Account
        </button>

        <p className="signin-text">
          Already have an account?{" "}
          <a href="/" className="signin-link">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
