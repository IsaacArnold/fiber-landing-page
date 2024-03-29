import React from "react";
import { Link } from "gatsby";
import Hamburger from "../images/svg/hamburger-menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="content-container">
        <Link to="/#" className="nav-brand">
          <h2>Fiber</h2>
        </Link>
        <ul>
          <li>Community</li>
          <li>Pricing</li>
          <li>Featuers</li>
        </ul>
        <div className="nav-btns">
          <Link to="/#" className="sign-in-btn">
            Sign In
          </Link>
          <Link to="/sign-up" className="sign-up-btn">
            Sign Up
          </Link>
        </div>
        <Hamburger className="hamburger" />
      </div>
    </nav>
  );
};

export default Navbar;
