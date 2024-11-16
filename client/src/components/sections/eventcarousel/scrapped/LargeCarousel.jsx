import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

const LargeCarousel = () => {
  return (
    <Carousel id="carouselLarge" interval={3000} indicators={false} controls>
      <Carousel.Item>
        <Container>
          <Row>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img
                    src="src/assets/events/meetup/1.png"
                    alt="Event01"
                  />
                  <div className="card-overlay">
                    <h2>Event 01 Name</h2>
                    <p>Some description about the Event</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img
                    src="src/assets/events/meetup/2.png"
                    alt="Event02"
                  />
                  <div className="card-overlay">
                    <h2>Event 02 Name</h2>
                    <p>Some description about the Event</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img
                    src="src/assets/events/meetup/3.png"
                    alt="Event03"
                  />
                  <div className="card-overlay">
                    <h2>Event 03 Name</h2>
                    <p>Some description about the Event</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img
                    src="src/assets/events/meetup/1.png"
                    alt="Event01"
                  />
                  <div className="card-overlay">
                    <h2>Event 01 Name</h2>
                    <p>Some description about the Event</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img
                    src="src/assets/events/meetup/2.png"
                    alt="Event02"
                  />
                  <div className="card-overlay">
                    <h2>Event 02 Name</h2>
                    <p>Some description about the Event</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img
                    src="src/assets/events/meetup/3.png"
                    alt="Event03"
                  />
                  <div className="card-overlay">
                    <h2>Event 03 Name</h2>
                    <p>Some description about the Event</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default LargeCarousel;
