import React from "react";
import { Card, CardBody } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section id="aboutus" className="text-center section-spacing">
      <div className="container px-4">
        <p className="subtitle-text mb-0 text-light">Who we are</p>
        <h1 className="main-header-text mb-4">
          About Us<i className="bi bi-building-fill fs-2 header-icon"></i>
        </h1>
        <p className="slogan-text px-lg-5 mx-auto">
          Allow us to introduce ourselves and share our passion for fostering
          innovation, learning, and leadership in the field of technology.
        </p>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="card aboutus-content-card p-3">
              <h1 className="card-title">Our Story</h1>
              <p>
                We are a passionate community of students dedicated to fostering
                innovation, learning, and leadership in the field of technology.
                Join us as we shape the future of technology together.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="card aboutus-content-card p-3">
              <h1 className="card-title">Our Mission</h1>
              <p>
                Our mission is to foster a vibrant tech community by providing
                students with opportunities to grow in the field of technology.
                Join us as we strive to make a positive impact.
              </p>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-calendar3-week-fill icon"></i>
              <h1>02</h1>
              <p>Years of Establish</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-people-fill icon"></i>
              <h1>50+</h1>
              <p>Collaborations</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-cast icon"></i>
              <h1>20+</h1>
              <p>Online Events</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-person-arms-up icon"></i>
              <h1>20+</h1>
              <p>Physical Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
