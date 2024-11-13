import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const CustomNavbar = () => {
    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="shadow-sm border-bottom"
        >
            <Container fluid>
                <Navbar.Brand href="#" className="me-3">
                    <img
                        src="logo.jpeg"
                        alt="Logo"
                        width="70"
                        height="70"
                        className="d-inline-block align-text-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ms-auto mb-2 mb-lg-0">
                        <Nav.Link href="#aboutus">
                            <i className="bi bi-person-fill"></i> About Us
                        </Nav.Link>
                        <Nav.Link href="#team">
                            <i className="bi bi-people-fill"></i> Our Team
                        </Nav.Link>
                        <Nav.Link href="#events">
                            <i className="bi bi-calendar-event-fill"></i> Events
                        </Nav.Link>
                        <Nav.Link href="#plan">
                            <i className="bi bi-diagram-3-fill"></i> Plan of
                            Action
                        </Nav.Link>
                        <Nav.Link href="#benefits">
                            <i className="bi bi-gift-fill"></i> Benefits
                        </Nav.Link>
                        <Nav.Link href="#faqs">
                            <i className="bi bi-question-circle-fill"></i> FAQs
                        </Nav.Link>
                    </Nav>
                    <Button href="#" className="ms-lg-3 btn-custom">
                        Get Started
                        <i className="ms-1 bi bi-arrow-right-circle-fill"></i>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
