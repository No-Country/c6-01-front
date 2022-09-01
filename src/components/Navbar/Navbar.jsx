import React from "react";
import logo from "../../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import "./navbar.scss";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} />
        <button className="nav-button">Careers</button>
        <button className="nav-button">Universities</button>
        <button className="nav-button">Sign Up</button>
        <button
          className="nav-button"
          style={{ backgroundColor: "#A8BBBF", color: "black", opacity: "1" }}
        >
          Sign In
        </button>
        <FaRegUserCircle className="user-icon" />
      </nav>
    </div>
  );
}

export default Navbar;
