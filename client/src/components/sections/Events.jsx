import React from "react";
import Carousel from "./eventcarousel/EventsCarousel";

const Events = () => {
  return (
    <section
      id="events"
      className="text-center section-spacing"
      style={{ height: "80vh" }}
    >
      <h1 className="main-header-text mb-4">
        Events<i className="bi bi-calendar-event-fill fs-2 header-icon"></i>
      </h1>
      <div className="events-carousel">
        <Carousel />
      </div>
    </section>
  );
};

export default Events;
