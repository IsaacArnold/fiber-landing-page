import React from "react";
import { Link } from "gatsby";

const Portfolios = () => {
  return (
    <section className="portfolios">
      <div className="port-card">
        {/* <img /> */}
        <p>Sarah Andrews</p>
        <p>$100k in revenue</p>
        <p>
          Setting up my portfolio with Fiber too no more than 10 minutes. Since
          then, my portfolio has attracted a lot of clients and made me more
          than $100k.
        </p>
        <Link to="/#">View Sarah's Portfolio</Link>
      </div>
      <div className="port-card">
        {/* <img /> */}
        <p>Mathew Higgins</p>
        <p>$20k in revenue</p>
        <p>
          I have been getting A LOT of leads ever since I used Fiber's premade
          templates, now I just need to work on my case studies and I'll be
          ready to go!
        </p>
        <Link to="/#">View Mathew's Portfolio</Link>
      </div>
      <div className="port-card">
        {/* <img /> */}
        <p>Janice Dave</p>
        <p>$30k in revenue</p>
        <p>
          I only just started freelancing this year and I have already made more
          than I ever made in my full-time job. The templates are just so
          amazing.
        </p>
        <Link to="/#">View Janice's Portfolio</Link>
      </div>
    </section>
  );
};

export default Portfolios;
