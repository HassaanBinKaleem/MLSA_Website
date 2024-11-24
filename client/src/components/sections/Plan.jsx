import React from "react";

const Plan = () => {
  return (
    <section id="plan" className="text-center section-spacing">
      <div className="container px-4">
        <p className="subtitle-text">How It Works</p>
        <h1 className="main-header-text mb-4">Plan of Action</h1>
        <p className="slogan-text px-lg-5 mx-auto">
          Our plan of action to improved students confidence and spread
          knowledge by seminars,workshops,competitions and many more.
        </p>
        <div className="row">
          <div className="col-sm">
            <div className="chevron chevron-start d-flex justify-content-center align-items-center text-center pe-4">
              Online Events
            </div>
          </div>
          <div className="col-sm">
            <div className="chevron chevron-second d-flex justify-content-center align-items-center text-center ps-4">
              Competitions & Hackathons
            </div>
          </div>
          <div className="col-sm">
            <div className="chevron chevron-second chevron-third d-flex justify-content-center align-items-center text-center ps-4">
              Physical Events
            </div>
          </div>
          <div className="col-sm">
            <div className="chevron chevron-end d-flex justify-content-center align-items-center text-center ps-4">
              Seminars & Workshops
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
