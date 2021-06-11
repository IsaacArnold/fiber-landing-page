import React from "react";
import Hamburger from "../images/svg/hamburger-menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="content-container">
        <h2>Fiber</h2>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
