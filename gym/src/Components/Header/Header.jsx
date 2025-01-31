import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header flex-row-between max-width">
      <div className="header-section">
        <h3 className="h3-mid-blue">Flux Fitness</h3>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links - Desktop & Mobile */}
      <div
        className={`header-section flex-row-between links ${
          menuOpen ? "show" : ""
        }`}
      >
        <div
          className="link"
          onClick={() => {
            nav("/");
            setMenuOpen(false);
          }}
        >
          Home
        </div>
        <div
          className="link"
          onClick={() => {
            nav("/activities");
            setMenuOpen(false);
          }}
        >
          Activities
        </div>
        <div
          className="link"
          onClick={() => {
            nav("/bookings");
            setMenuOpen(false);
          }}
        >
          Bookings
        </div>
      </div>

      {/* Login & Signup Buttons */}
      <div className="header-section auth-buttons">
        <button className="btn-fill mgr-1" onClick={() => nav("/login")}>
          Login
        </button>
        <button className="btn" onClick={() => nav("/signup")}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
