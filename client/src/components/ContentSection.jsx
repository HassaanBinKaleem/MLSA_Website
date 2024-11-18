import React from "react";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import AboutUs from "./sections/AboutUs";
import Team from "./sections/Team";
import Plan from "./sections/Plan";

const ContentSection = () => {
  return (
    <div className="content-section">
      <Hero />
      <Events />
      <AboutUs />
      <Team />
      <Plan />
    </div>
  );
};

export default ContentSection;
