import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Checkmark from "../images/svg/checkmark.svg";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="content-container">
        <StaticImage
          src="../images/hero-illustration.png"
          alt="Person using multimedia while wearing VR Glasses"
        />
        <h1>Create your portfolio in minutes.</h1>
        <p>
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <div className="header-btns">
          <Link to="/#" className="main-btn">
            Start Free Trial
          </Link>
          <Link to="/#" className="secondary-btn">
            View Examples
          </Link>
        </div>
        <div className="checkmark-section">
          <div className="checkmark-div">
            <Checkmark className="checkmark" />
            <p>No Credit Card Required</p>
          </div>
          <div className="checkmark-div">
            <Checkmark className="checkmark" />
            <p>10 Free Templates</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
