import Carousel from "react-bootstrap/Carousel";

function LargeCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <CardItem src="src/assets/events/meetup/Meetup01a.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
import CardItem from "./CardItem";

export default LargeCarousel;
