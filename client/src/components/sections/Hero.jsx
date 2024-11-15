import React from "react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="d-flex justify-content-center align-items-center text-center"
            style={{ height: "80vh" }}
        >
            <div className="container px-4">
                <div className="row">
                    <div className="col">
                        <h1 className="main-header-text mb-4">
                            Empowering Tomorrow's Innovators
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="helper-text px-lg-5 mx-auto">
                            Welcome to <strong>MLSA Multan Chapter</strong>,
                            where we aim to empower students with the skills and
                            knowledge needed to succeed in the digital age.
                        </p>
                    </div>
                </div>
                <div className="row text-center mt-3 btn-hero-section d-flex justify-content-center mx-auto">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <a href="#team" className="btn btn-hero btn-primary w-100">
                            Our Team
                        </a>
                    </div>
                    <div className="col-12 col-md-6">
                        <a
                            href="#events"
                            className="btn btn-hero btn-secondary w-100"
                        >
                            View Events
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
