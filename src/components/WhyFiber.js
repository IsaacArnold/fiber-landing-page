import React from "react";

const WhyFiber = () => {
  return (
    <section className="why-fiber">
      <header>
        <h4>Why Fiber?</h4>
        <h2>A good portfolio means good employability.</h2>
      </header>
      <div className="features">
        <div className="features-section">
          {/* <svg /> */}
          <p>Build in minutes</p>
          <p>
            With a selection of premade templates, you can build out a portfolio
            in less than 10 minutes.
          </p>
        </div>
        <div className="features-section">
          {/* <svg /> */}
          <p>Add custom CSS</p>
          <p>
            Customize your personal portfolio even more with the ability to add
            your own custom CSS styles.
          </p>
        </div>
        <div className="features-section">
          {/* <svg /> */}
          <p>Responsive</p>
          <p>
            All Fiber templates are full responsive to ensure the experience is
            seemless across all devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFiber;
