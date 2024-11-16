import React from "react";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import AboutUs from "./sections/AboutUs";

const ContentSection = () => {
    return (
        <div className="content-section">
            <Hero />
            <Events />
            <AboutUs />
        </div>
    );
};

export default ContentSection;
