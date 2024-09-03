import CarouselImages from "../../components/Carousel/Carousel"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import "./Home.css"
import { useNavigate } from "react-router-dom";
import React from 'react';

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Reservation');
  };




  return (
    <>
      <div className="m-0 p-0 text-bg-dark bg-light ">
        <div className="video-content row text-center  " >
          <div className="col fs-5 position-absolute  top-50 start-50 translate-middle " id="text-principal">
         
            <p id="text-video" className="text-center fs-1 fst-italic">Bienvenidos</p>
            <button onClick={handleClick} id="button-video" type="button" className="btn fs-5  ">Reservar</button>
           
          </div>
          <video className="video-background" loop={true} autoPlay={true} muted={true}  >
            <source src="/videos/introduction.Mp4" type="video/Mp4" />
          </video>
        </div>
        <div className="col p-3 " >
          <div className=" container-fluid col text-center ">
            <Image src="./images/logo.jpg" className="img-fluid" />
          </div>
          <h1 className="fst-italic text-start text-black" id="text1">THE ART OF LIVING</h1>
        </div>
        <div className="row align-items-center" id="container-carousel-text">
          <div className="col " id="carousel1">
            <CarouselImages />
          </div>
          <div className="col" id="carousel2">
            <p className="fs-2 fst italic text-end text-black">Casa l´Art te ofrece la posibilidad de disfrutar de nuestras comidas, bebidas, cócteles, tés, postres.. de una manera especial.</p>

          </div></div>
        <div className=" text-bg-dark p-5 bg-light">
          <div className="row align-items-center">
            <Tabs defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-5 d-flex justify-content-center p-2 border-dark  ">
              <Tab eventKey="home" title="Salon tradicional" >
                <div className="container text-center " id="tab">
                  <div className="row" >
                    <div className="col ">
                      <Image src="./images/places/place3.jpg" className="img-fluid" alt="..." fluid />
                    </div>
                    <div className="col">
                      <Image src="./images/places/place4.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className="col ">
                      <Image src="./images/places/place5.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className="container text-center p-2">
                      <div className="row">
                        <div className="col">
                          <Image src="./images/places/place2.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col">
                          <Image src="./images/places/place1.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col">
                          <Image src="./images/places/place6.jpg" className="img-fluid" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="La Carta"  >
                <div className="container text-center bg-light" id="tab">
                  <div className="row">
                    <div className="col">
                      <Image src="./images/food/food1.jpg" className="img-fluid" alt="..." fluid />
                    </div>
                    <div className="col">
                      <Image src="./images/food/food2.jpg" className="img-fluid" alt="..." fluid />
                    </div>
                    <div className="col">
                      <Image src="./images/food/food3.jpg" className="img-fluid" alt="..." fluid />
                    </div>
                    <div className="container text-center">
                      <div className="row p-2">
                        <div className="col">
                          <Image src="./images/food/food4.jpg" className="img-fluid" alt="..." fluid />
                        </div>
                        <div className="col">
                          <Image src="./images/food/food5.jpg" className="img-fluid" alt="..." fluid />
                        </div>
                        <div className="col">
                          <Image src="./images/food/food6.jpg" className="img-fluid" alt="..." fluid />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Cocteleria"  >
                <div className="container text-center" id="tab">
                  <div className="row">
                    <div className="col">
                      <Image src="./images/cocktail/cocktail1.jpg" className="img-fluid" alt="..." fluid />
                    </div>
                    <div className="col">
                      <Image src="./images/cocktail/cocktail2.jpg" className="img-fluid" alt="..." fluid />
                    </div>
                    <div className="col ">
                      <Image src="./images/cocktail/cocktail3.jpg" className="img-fluid" alt="..." fluid />
                    </div>
                    <div className="container text-center">
                      <div className="row p-2">
                        <div className="col">
                          <Image src="./images/places/place4.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col">
                          <Image src="./images/places/place5.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col">
                          <Image src="./images/places/place6.jpg" className="img-fluid" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="container-fluid row" id="image-container">
          <div className="col fs-4 m-5 text-black">Casa l´Art es una casa con más de 400 años de historia y suaves toques modernistas. Es un agradable lugar de encuentro con una cuidada línea colorista donde los detalles no pasan desapercibidos.</div>
          <div className="col text-center m-5 " id="zoom-image">
            <Image src="./images/Casa400.jpg" className="img-fluid" alt="Zoomable" />
          </div>
        </div>
      </div>

    </>
  )
}