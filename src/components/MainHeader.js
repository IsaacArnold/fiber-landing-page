import React from "react";
import { Link } from "gatsby";

const MainHeader = () => {
  return (
    <header>
      {/* <img /> */}
      <h1>Create your portfolio in minutes.</h1>
      <p>
        With Fiber, you can setup your own personal portfolio in minutes with
        dozens of premade, beautiful templates.
      </p>
      <Link to="/#">Start Free Trial</Link>
      <Link to="/#">View Examples</Link>
      <div className="checkmark-section">
        <div>
          {/* <svg /> */}
          <p>No Credit Card Required</p>
        </div>
        <div>
          {/* <svg /> */}
          <p>10 Free Templates</p>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
