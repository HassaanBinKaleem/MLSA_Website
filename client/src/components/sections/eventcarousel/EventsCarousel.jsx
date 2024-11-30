import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import Meetup1 from "../../../assets/events/meetup/1.png";
import Meetup2 from "../../../assets/events/meetup/2.png";
import Meetup3 from "../../../assets/events/meetup/3.png";
import Meetup4 from "../../../assets/events/meetup/4.png";
import Meetup5 from "../../../assets/events/meetup/5.png";
import Meetup6 from "../../../assets/events/meetup/6.png";
import Meetup7 from "../../../assets/events/meetup/7.png";
import Meetup8 from "../../../assets/events/meetup/8.png";

const EventsCarousel = () => {
  return (
    <Carousel id="carousel" interval={5000} indicators={false} controls>
      <Carousel.Item>
        <Container>
          <Row>
            <Col lg={12}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img src={Meetup1} alt="Event01" />
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
                  <Card.Img src={Meetup2} alt="Event02" />
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
            <Col lg={12}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img src={Meetup3} alt="Event03" />
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
            <Col lg={12}>
              <Card className="custom-card">
                <div className="img-container">
                  <Card.Img src={Meetup4} alt="Event04" />
                  <div className="card-overlay">
                    <h2>Event 04 Name</h2>
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
                  <Card.Img src={Meetup5} alt="Event05" />
                  <div className="card-overlay">
                    <h2>Event 05 Name</h2>
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
                  <Card.Img src={Meetup6} alt="Event06" />
                  <div className="card-overlay">
                    <h2>Event 06 Name</h2>
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
                  <Card.Img src={Meetup7} alt="Event07" />
                  <div className="card-overlay">
                    <h2>Event 07 Name</h2>
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
                  <Card.Img src={Meetup8} alt="Event08" />
                  <div className="card-overlay">
                    <h2>Event 08 Name</h2>
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
