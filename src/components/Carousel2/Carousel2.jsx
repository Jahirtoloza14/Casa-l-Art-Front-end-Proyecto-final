import Carousel from 'react-bootstrap/Carousel';


function CarouselImages2() {
  return (
    <>
      <Carousel data-bs-theme="dark" >
        <Carousel.Item >
          <img
            className="img-fluid d-block w-100"
            src="./images/imageCarousel7.png"
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="./images/imageCarousel8.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="./images/imageCarousel9.png"
            alt="Third slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></>
  );
}

export default CarouselImages2;