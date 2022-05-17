import { Carousel } from "react-bootstrap";
import bild1 from "../pictures/bild1.png"
import bild2 from "../pictures/bild2.png"
import bild3 from "../pictures/bild3.png"

const Slider = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={bild1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Första bilden</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={bild2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Andra bilden</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={bild3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Tredje bilden</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
