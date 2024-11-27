import React from "react";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import AboutUs from "./sections/AboutUs";
import Team from "./sections/Team";
import Plan from "./sections/Plan";
import Benefits from "./sections/Benefits";

const ContentSection = () => {
  return (
    <div className="content-section">
      <Hero />
      <Events />
      <AboutUs />
      <Team />
      <Plan />
      <Benefits />
    </div>
  );
};

export default ContentSection;
