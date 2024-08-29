
function Footer() {
  return (

    <div className="text-center text-black bg-light  p-3  ">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-1  ">
        <div className="col border-end border-2">
          <div className="col  "><h6>Contacto</h6></div>
          <div className="col  ">+34 555-55-55</div>
          <div className="col  ">@info@casalart.com</div>
        </div>
        <div className="col border-end border-2">
          <div className="col  "><h6>Casa l'Art</h6></div>
          <div className="col  ">Trabaja con nosotros</div>
          <div className="col  ">Privacidad</div>
        </div>
        <div className="col border-end border-2">
          <div className="col "><h6>Siguenos</h6></div>
          <div className="col  ">Facebook</div>
          <div className="col  ">Instagram</div>
        </div>
        <div className="col  border-2 ">
          <div className="col"><h6>Reservas</h6></div>
          <div className="col ">Abierto de 12:00-22:00</div>
          <div className="col m-2 "><button type="button" href="/Reservation" className="btn btn-outline-success">Quiero reservar</button></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;