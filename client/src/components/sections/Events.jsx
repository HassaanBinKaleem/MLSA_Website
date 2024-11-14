import React from "react";
import LargeCarousel from "./eventcarousel/LargeCarousel";

const Events = () => {
  return (
    <section
      id="events"
      className="text-center section-spacing"
      style={{ height: "80vh" }}
    >
      <h1 className="main-header-text mb-4">Events</h1>
      <LargeCarousel />
    </section>
  );
};

export default Events;
