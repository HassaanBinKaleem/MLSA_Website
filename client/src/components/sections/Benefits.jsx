import React from "react";
import LargeCarousel from "./benefitscaroursel/LargeCarousel";
import MediumCarousel from "./benefitscaroursel/MediumCarousel";
import SmallCarousel from "./benefitscaroursel/SmallCarousel";

const Benefits = () => {
  return (
    <section id="benefits" className="text-center section-spacing">
      <div className="container px-4">
        <p className="subtitle-text mb-0 text-light">What You'll Get</p>
        <h1 className="main-header-text mb-4">
          Benefits<i className="bi bi-stars fs-2 header-icon"></i>
        </h1>
        <p className="slogan-text px-lg-5 mx-auto text-light">
          Our team is dedicated to empower the students with technical or non
          technical skills as well and also supports them to make their career.
        </p>
        <div className="benefits-carousel">
          <div id="LargeCarousel">
            <LargeCarousel />
          </div>
          <div id="MediumCarousel">
            <MediumCarousel />
          </div>
          <div id="SmallCarousel">
            <SmallCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
