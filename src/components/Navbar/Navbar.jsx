import React from "react";
import logo from "../../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to={"/"}>
          <img src={logo} />
        </NavLink>

        <button className="nav-button">Careers</button>
        <button className="nav-button">Universities</button>
        <NavLink to={"/register"} className="nav-button">
          Sign Up
        </NavLink>

        <NavLink
          to={"/login"}
          className="nav-button"
          style={{ backgroundColor: "#A8BBBF", color: "black", opacity: "1" }}
        >
          Sign In
        </NavLink>

        <FaRegUserCircle className="user-icon" />
      </nav>
    </div>
  );
}

export default Navbar;
