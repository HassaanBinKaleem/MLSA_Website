import React from "react";
// import LargeCarousel from "./eventcarousel/scrapped/LargeCarousel";
// import MediumCarousel from "./eventcarousel/scrapped/MediumCarousel";
// import SmallCarousel from "./eventcarousel/scrapped/SmallCarousel";
import Carousel from "./eventcarousel/EventsCarousel";

const Events = () => {
  return (
    <section
      id="events"
      className="text-center section-spacing"
      style={{ height: "80vh" }}
    >
      <h1 className="main-header-text mb-4">Events</h1>
      <div className="events-carousel">
        <Carousel />
        {/* Scrapped Code */}
        {/* <div id="LargeCarousel">
          <LargeCarousel />
        </div>
        <div id="MediumCarousel">
          <MediumCarousel />
        </div>
        <div id="SmallCarousel">
          <SmallCarousel />
        </div> */}
      </div>
    </section>
  );
};

export default Events;
