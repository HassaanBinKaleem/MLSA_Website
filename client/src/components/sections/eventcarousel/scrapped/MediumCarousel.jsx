import React from 'react'
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

const MediumCarousel = () => {
  return (
    <Carousel id="carouselMedium" interval={3000} indicators={false} controls>
      <Carousel.Item>
        <Container>
          <Row>
            <Col md={6}>
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
            <Col md={6}>
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
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row>
            <Col md={6}>
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
            <Col md={6}>
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
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  )
}

export default MediumCarousel