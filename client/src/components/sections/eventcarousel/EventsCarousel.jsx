import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import Meetup1 from "../../../assets/events/meetup/1.png"
const EventsCarousel = () => {
  return (
    <Carousel id="carousel" interval={5000} indicators={false} controls>
      <Carousel.Item>
        <Container>
          <Row>
            <Col lg={12}>
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
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row>
            <Col lg={12}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img
                    src={Meetup1}
                    alt="Event01"
                  />
                  <div className="card-overlay">
                    <h2>Event 01 Name</h2>
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

export default EventsCarousel;
