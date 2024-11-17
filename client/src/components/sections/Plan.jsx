import React from "react";

const Plan = () => {
  return (
    <section id="team" className="text-center section-spacing">
      <div className="container px-4">
        <p className="subtitle-text">How It Works</p>
        <h1 className="main-header-text mb-4">Plan of Action</h1>
        <p className="slogan-text px-lg-5 mx-auto">
          Our plan of action to improved students confidence and spread
          knowledge by seminars,workshops,competitions and many more.
        </p>
        <div className="row">
          <div className="col">
            <div className="chevron-start"></div>
          </div>
          <div className="col">
            <div className="chevron-mid"></div>
          </div>
          <div className="col">
            <div className="chevron-mid"></div>
          </div>
          <div className="col">
            <div className="chevron-end"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
