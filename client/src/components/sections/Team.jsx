import React, { useState } from "react";
import MainLead from "../../assets/team/main-lead.png"
import MaleLead from "../../assets/team/male-lead.jpg"
import WebDevLead from "../../assets/team/web-dev-lead.jpg"
import GraphicLead from "../../assets/team/graphic-lead.jpg"
import MediaLead from "../../assets/team/media-lead.png"

const Team = () => {
  const [imageSrc, setImageSrc] = useState(MainLead);
  const handleMouseEnter = (imgSrc) => {
    setImageSrc(imgSrc);
  };
  const handleMouseLeave = () => {
    setImageSrc(MainLead);
  };

  return (
    <section id="team" className="text-center section-spacing">
      <div className="container px-4">
        <p className="subtitle-text mb-0 text-light">Our Main Leads</p>
        <h1 className="main-header-text mb-4">
          Our Team<i className="bi bi-people-fill fs-2 header-icon"></i>
        </h1>
        <p className="slogan-text px-lg-5 mx-auto mb-5 text-light">
          We have a passionate team of 30 members with different roles from
          social to tech and tech to marketing we have a complete team of
          passionate students.
        </p>
        <div className="row">
          <div className="col show-image-tooltip">
            <div className="row">
              <div className="col">
                <div
                  className="card team-content-card mb-3 p-3 text-start"
                  onMouseEnter={() => handleMouseEnter(MainLead)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h1 className="card-title">Abdul Rehman</h1>
                  <p>Main Team Lead</p>
                </div>
                <div
                  className="card team-content-card my-3 p-3 text-start"
                  onMouseEnter={() => handleMouseEnter(MaleLead)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h1 className="card-title">Talal Jilani</h1>
                  <p>Male Lead</p>
                </div>
                <div
                  className="card team-content-card my-3 p-3 text-start"
                  onMouseEnter={() => handleMouseEnter(WebDevLead)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h1 className="card-title">Hassaan Bin Kaleem</h1>
                  <p>Web Dev Lead</p>
                </div>
                <div
                  className="card team-content-card my-3 p-3 text-start"
                  onMouseEnter={() => handleMouseEnter(GraphicLead)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h1 className="card-title">Umar Abdullah</h1>
                  <p>Graphics Lead</p>
                </div>
                <div
                  className="card team-content-card mt-3 p-3 text-start"
                  onMouseEnter={() => handleMouseEnter(MediaLead)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h1 className="card-title">Anees Haider</h1>
                  <p>Media Lead</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col member-img-container p-1">
            <img
              id="team-image"
              src={imageSrc}
              alt="team"
              className="rounded-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
