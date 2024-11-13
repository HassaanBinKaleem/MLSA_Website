import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg px-3 border-bottom shadow-sm rounded">
            <div className="container-fluid">
                <a className="navbar-brand me-3" href="#">
                    <img
                        src="logo.jpeg"
                        alt="Logo"
                        width="70"
                        height="70"
                        className="d-inline-block align-text-top text-center"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutus">
                                <i className="bi bi-person-fill"></i>About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">
                                <i className="bi bi-people-fill"></i>Our Team
                            </a>
                        </li>
                        {/* <!-- Optional: Dropdown Nav Item for Separate Events -->
                        <!-- <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Events
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#"
                                        >An Event</a
                                    >
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"
                                        >Another Event</a
                                    >
                                </li>
                            </ul>
                        </li> --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#events">
                                <i className="bi bi-calendar-event-fill"></i>Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#plan">
                                <i className="bi bi-diagram-3-fill"></i>Plan of
                                Action
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#benefits">
                                <i className="bi bi-gift-fill"></i>Benefits
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqs">
                                <i className="bi bi-question-circle-fill"></i>FAQs
                            </a>
                        </li>
                    </ul>
                    <a className="btn btn-custom" href="#">
                        Get Started
                        <i className="ms-1 bi bi-arrow-right-circle-fill"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
