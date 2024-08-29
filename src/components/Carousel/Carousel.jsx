import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";

function CarouselImages() {
  return (
    <>
      <Carousel className='carousel1' data-bs-theme="dark"  >
        <Carousel.Item >
          <img
            className="img-fluid  w-100"
            src="./images/imageCarousel4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="./images/imageCarousel5.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="./images/imageCarousel6.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></>
  );
}

export default CarouselImages;