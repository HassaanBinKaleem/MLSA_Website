import React from "react";
import { Card, CardBody } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section id="aboutus" className="text-center section-spacing">
      <div className="container px-4">
        <p className="subtitle-text">Who we are</p>
        <h1 className="main-header-text mb-4">About Us</h1>
        <p className="slogan-text px-lg-5 mx-auto">
          Allow us to introduce ourselves and share our passion for fostering
          innovation, learning, and leadership in the field of technology.
        </p>
        <div className="row">
          <div className="col-lg mb-3">
            <div className="card aboutus-content-card p-3">
              <h1 className="card-title ">Our Story</h1>
              <p>
                We are a passionate community of students dedicated to fostering
                innovation, learning, and leadership in the field of technology.
                Through workshops, events, and collaborations, we aim to empower
                students with the skills and knowledge needed to succeed in the
                digital age. Join us on our journey as we strive to make a
                positive impact on our community and beyond. Together, we can
                shape the future of technology!
              </p>
            </div>
          </div>
          <div className="col-lg mb-3">
            <div className="card aboutus-content-card p-3">
              <h1 className="card-title ">Our Mission</h1>
              <p>
                Our mission is to foster a vibrant tech community and providing
                students with opportunities to learn, share and grow in the
                field of technology. Through workshops, events, and
                collaborations, we aim to empower students with the skills and
                knowledge needed to succeed in the digital age. Join us on our
                journey as we strive to make a positive impact on our community
                and beyond. Together, we can shape the future of technology!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg col-6 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-calendar3-week-fill icon"></i>
              <h1>02</h1>
              <span>Years of Establish</span>
            </div>
          </div>
          <div className="col-lg col-6 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-people-fill icon"></i>
              <h1>50+</h1>
              <span>Collaboration</span>
            </div>
          </div>
          <div className="col-lg col-6 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-cast icon"></i>
              <h1>20+</h1>
              <span>Online Events</span>
            </div>
          </div>
          <div className="col-lg col-6 mb-3">
            <div className="card aboutus-metric-card p-3">
              <i class="bi bi-person-arms-up icon"></i>
              <h1>20+</h1>
              <span>Physical Events</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
