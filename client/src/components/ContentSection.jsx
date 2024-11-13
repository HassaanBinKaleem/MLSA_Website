import React from "react";
import Hero from "./sections/Hero";
import Events from "./sections/Events";

const ContentSection = () => {
    return (
        <div className="content-section">
            <Hero />
            <Events />
        </div>
    );
};

export default ContentSection;
