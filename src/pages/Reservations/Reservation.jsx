import "./Reservation.css";
import { useState } from "react";
import { login } from "../userSlice";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { registerNewReservationCall } from "../../services/apiRoutes";
import Image from 'react-bootstrap/Image';
import { Button, Modal } from "react-bootstrap";


export const Reservation = () => {
    const [showModal, setShowModal] = useState(false);
    const [credentials, setCredentials] = useState({

        Name: "",
        last_name: "",
        user_id: "",
        Comensales: "",
        Carta:"",
        Menu: "",
        table: "",
        date: ""

    });
    const [msg, setMsg] = useState("")

    const inputHandler = (e) => {
        //generate the function that binds
        setCredentials(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));

    };
    const handleClose = () => setShowModal(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    // Register reservation by client
    const RegisterReservation = async () => {
        const answer = await registerNewReservationCall(credentials);
        setMsg(answer.data.message)
        if (answer.data.success) {
            dispatch(login(answer.data, token));
            setTimeout(() => {
                navigate("/login");
            }, 1000)
        }
    }

    return (
        <>
            <div className="reservation ">
                <div className="row "  >
                    <div className="col m-0 p-0  text-center"  >
                        <Image src="./images/logo.jpg" className=" " id="img" />
                    </div>
                    <div className="col  p-5 mb-5  text-primary " id="container-reservation" >
                        <span className="row fs-2 text-start">Datos</span>
                        <span className="row fs-3 text-start border-bottom">De su reserva</span>
                        <p>Para realizar la reserva es necesio crear un usuario en: <button className="btn border-none" href="/Login">CLIENTE VIP</button></p>
                        <Form onSubmit={handleSubmit}  >
                            <Row className="mb-3 mt-5 me-4  ">
                                <Form.Group className="col border-success  md-3" >
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control className="col border-success bg-light"
                                        type={"text"}
                                        name={"Name"}
                                        onChange={inputHandler}
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" >
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control className="col border-success bg-light"
                                        type={"text"}
                                        name={"last_name"}
                                        onChange={inputHandler}
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Numero ID </Form.Label>
                                    <Form.Control className="col border-success bg-light"
                                        required
                                        type="number"
                                        name={"user_id"}
                                        onChange={inputHandler}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" >
                                    <Form.Label column sm="2">Menu</Form.Label>
                                    <Form.Control className="col border-success light"
                                        required
                                        type="text"
                                        name={"Menu"}
                                        onChange={inputHandler}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" className="mb-4" >
                                    <Form.Label column sm="2">Comensales:</Form.Label>
                                    
                                        <Form.Control
                                            className="col border-success bg-light"
                                            type="number"                               
                                            onChange={inputHandler}
                                            name={"Comensales"}
                                        />
                                    
                                </Form.Group>
                                <Form.Group as={Col} md="4" className="mb-4" >
                                    <Form.Label column sm="2">Carta:</Form.Label>
                                    
                                        <Form.Control
                                            className="col border-success bg-light"
                                            type="text"  
                                            name={"Carta"}                             
                                            onChange={inputHandler}
                                            min="1"
                                        />
                                 
                                </Form.Group>

                                <Form.Group as={Col} md="4" >
                                    <Form.Label>Mesa</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control className="col border-success bg-light"
                                            type="number"
                                            name={"table"}
                                            onChange={inputHandler}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3" >
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control className="col border-success bg-light"
                                        name={"date"}
                                        type={"datetime-local"}
                                        onChange={(e) => inputHandler(e)} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group >
                                <Form.Check className="mb-5"
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <button type="submit" className="btn btn-danger" onClick={RegisterReservation}>Reservar</button>
                        </Form></div>
                </div>
            </div>

            /* show reservacion by modal */

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reserva creada con exito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Nombre:</strong> {credentials.Name}</p>
                    <p><strong>Apellido:</strong> {credentials.last_name}</p>
                    <p><strong>Numero ID:</strong> {credentials.user_id}</p>
                    <p><strong>Comensales:</strong> {credentials.Comensales}</p>
                    <p><strong>Carta:</strong> {credentials.Carta}</p>
                    <p><strong>Mesa:</strong> {credentials.table}</p>
                    <p><strong>Menu:</strong> {credentials.Menu}</p>
                    <p><strong>Fecha:</strong> {credentials.date}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}