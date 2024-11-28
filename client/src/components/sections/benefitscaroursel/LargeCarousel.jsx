import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

const LargeCarousel = () => {
  return (
    <Carousel id="carouselLarge" interval={3000} indicators={false} controls>
      <Carousel.Item className="my-2">
        <Container>
          <Row>
            <Col lg={4}>
              <Card className="benefits-card">
                <Card.Body>
                  <i class="bi bi-people"></i>
                  <h1 className="fs-3">Peer Collaboration</h1>
                  <p>We keep it simple. No long meetings. No hassle.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="benefits-card">
                <Card.Body>
                  <i class="bi bi-lightning-charge"></i>
                  <h1 className="fs-3">Exclusive Events</h1>
                  <p>Request a design, receive it in a couple of days.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="benefits-card">
                <Card.Body>
                  <i class="bi bi-coin"></i>
                  <h1 className="fs-3">Networking Opportunities</h1>
                  <p>Fixed monthly rates. No changes, no surprises.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item className="my-2">
        <Container>
          <Row>
            <Col lg={4}>
              <Card className="benefits-card">
                <Card.Body>
                  <i class="bi bi-vector-pen"></i>
                  <h1 className="fs-3">Hands on Workshops</h1>
                  <p>
                    Each design is unique to you and tailored to your needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="benefits-card">
                <Card.Body>
                  <i class="bi bi-microsoft"></i>
                  <h1 className="fs-3">
                    Access of Microsoft Learning Resources
                  </h1>
                  <p>Manage your requests and keep track of the progress.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="benefits-card">
                <Card.Body>
                  <i class="bi bi-app-indicator"></i>
                  <h1 className="fs-3">Mentorship & Certifications</h1>
                  <p>Add, change, or cancel requests at any time.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default LargeCarousel;
