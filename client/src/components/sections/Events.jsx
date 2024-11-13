import React from "react";
import LargeCarousel from "./eventcarousel/LargeCarousel";

const Events = () => {
  return (
    <section
      id="events"
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <h1 className="main-header-text">Events Section</h1>
      <LargeCarousel />
    </section>
  );
};

export default Events;
