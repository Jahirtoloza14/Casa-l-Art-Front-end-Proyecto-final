import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, logout } from '../../pages/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import "./Header.css";
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




export const Header = () => {
  const userData = useSelector(getUserData)
  useEffect(() => {
    console.log(userData);
  }, [userData])
  useEffect(() => {
    console.log(userData);
  }, [userData])
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const myPassport = useSelector(getUserData)
  const token = myPassport?.token;
  const logMeOut = () => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/Login")
    }, 500)

  }


  return (
    <>
      <Navbar expand="lg" className="fst-italic bg-transparent  "  >
        <Container>
          <Navbar.Brand href="/Home"><span className='fs-3 fw-light '>Casa l'Art</span></Navbar.Brand>
          <Nav className=" text-center d-flex justify-content-center align-items-center ">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/Contact">Contacto</Nav.Link>
            <Nav.Link href="/Reservation">Reservar</Nav.Link>
            <NavDropdown.Divider />
            {token ? (
              <>
                
                <NavDropdown.Item onClick={() => logMeOut()} >

                </NavDropdown.Item></>) :
              (<Nav.Link href="/Login">Cliente VIP</Nav.Link>)
            }
            <NavDropdown.Divider />

            {token ? (
              <>
                <Nav.Link href="/Admin">Perfil</Nav.Link>
                <NavDropdown.Item onClick={() => logMeOut()} >
                  Cerrar Sesion

                </NavDropdown.Item></>) :
              (<Nav.Link href="/LoginAdmin">Administrador</Nav.Link>)

            }
          </Nav>
        </Container>
      </Navbar>

    </>

  );
}

export default Header;