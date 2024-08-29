import "./Menu.css"
import React from 'react';
import Image from 'react-bootstrap/Image';


export const Menu = () => {
  const openMenu1 = () => {
    window.open('./images/MenuPDF/menu1.pdf', '_blank', 'noopener,noreferrer');
  };
  const openMenuArrozes = () => {
    window.open('./images/MenuPDF/MenuArroz.pdf', '_blank', 'noopener,noreferrer');
  };
  const openCarta = () => {
    window.open('./images/MenuPDF/CartaPicoteo.pdf', '_blank', 'noopener,noreferrer');
  };
  const openCartaVinos = () => {
    window.open('./images/MenuPDF/cartaVinos.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="container-fluid row" id="menu">
        <div className="col text-center border ">
          <p className="fs-1 fst-italic">Menu 1</p>
          <Image src="./images/MenuPDF/Menu.png" className="img-fluid " />
          <button className="btn btn-primary" onClick={openMenu1}>Ver Menu 1</button>
        </div>
        <div className="col border ">
          <p className="fs-1 text-center fst-italic ">Menu Arrozes</p>
          <Image src="./images/MenuPDF/MenuArrocero.jpg" className="img-fluid " />
          <button className="btn btn-primary" onClick={openMenuArrozes}>Ver Menu </button>
        </div>
        <div className="col border">
          <p className="fs-1 text-center fst-italic">Carta</p>
          <Image src="./images/MenuPDF/Carta.png" className="img-fluid " />
          <button className="btn btn-primary" onClick={openCarta}>Ver Carta</button>
        </div>
        <div className="col border ">
          <p className="fs-1 text-center fst-italic">Carta de vinos</p>
          <Image src="./images/MenuPDF/ImageVinos.png" className="img-fluid " />
          <button className="btn btn-primary" onClick={openCartaVinos}>Ver Carta</button>
        </div></div>
    </>
  )
}