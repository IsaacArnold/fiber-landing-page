import React from "react";
import Footer from "../components/Footer";

import "../styles/normalize.css";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
