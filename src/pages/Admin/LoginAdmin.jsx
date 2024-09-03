import { useNavigate } from "react-router-dom";
import "./LoginAdmin.css"
import { useState } from "react"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { loginCall, registerNewAdminCall, registerNewUserCall } from "../../services/apiRoutes";
import InputGroup from 'react-bootstrap/InputGroup';


export const LoginAdmin = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        role_name: ""
    })
    const [credentials2, setCredentials2] = useState({
        email: "",
        password: ""
    })
    const [msg, setMsg] = useState("")
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const inputChangedLogin = (e) => {
        //genero la funcion que bindea

        setCredentials2(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            })
        )
    }
    const inputChangedRegister = (e) => {
        //genero la funcion que bindea
        setCredentials(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            })
        )
    }
    //register
    const RegisterMe = async () => {
        const answer = await registerNewAdminCall(credentials);
        setCredentials(answer.data.message)
        handleClose();
    }
    //login
    const loginMe = async () => {
        // esta sera la funcion que desencadenara el login
        const anwser = await loginCall(credentials2)
        if (anwser.data.token) {
            // decodificamos el token
            const uDecodificado = decodeToken(anwser.data.token);

            if (uDecodificado.role === 'admin') {
                const passport = {
                    token: anwser.data.token,
                    decodificado: uDecodificado
                };
                   
                dispatch(login(passport));             
                sessionStorage.setItem("passport", JSON.stringify(passport));             
                setCredentials(`bienvenid@ de nuevo`);

                setTimeout(() => {
                    navigate("/Admin", { state: passport });
                }, 500);
            } else {
                window.alert("acceso denegado")
                
            }
        }
}
    return (
        <>
            {msg === "" ?
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><p className="fs-2">Registro </p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" type="text" >
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    name="first_name"
                                    type="text"
                                    onChange={inputChangedRegister}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3"  >
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    onChange={inputChangedRegister} type="text" name="last_name"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Correo </Form.Label>
                                <Form.Control
                                    onChange={inputChangedRegister} type="email" name="email"

                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3"  >
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    onChange={inputChangedRegister} type="password" name="password"

                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={RegisterMe}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                : <div>{msg}</div>}
     < div className="bg-transparent  " id="login">
                <div className="col text-center ">
                    <div className="container row">
                        <div className="col">
                            <div className="row p-5">
                                <Image src="./images/logo1.png" className="img-fluid" />
                            </div>
                            <div className="row p-5">
                                <Image src="./images/logoPart2.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col m-5   text-center" >
                            <div className="col m-0 text-light fst-italic text-warning-emphasis "><h1>Ingreso Admintrador</h1></div>
                                 <div className="col m-0 text-light fst-italic "><p className="text-secondary">Si aun no tienes cuenta Click en <button className="btn-primary bg-light text-primary link-opacity-10-hover m-0 p-0" onClick={handleShow}>Registro</button> </p></div>
                        
                                <div className="row  text-end" >
                                    <InputGroup className="mb-4 form-control "  >
                                        <InputGroup.Text className="border-success  text-black  "  >Email</InputGroup.Text>
                                        <Form.Control className="border-success  text-black " onChange={inputChangedLogin} name="email" type="email" />
                                    </InputGroup>
                                </div>
                                <div className="row text-end">
                                    <InputGroup className="mb-2 form-control  "  >
                                        <InputGroup.Text className="border-success  text-black ">Password</InputGroup.Text>
                                        <Form.Control className="form-control border-success  text-black " onChange={inputChangedLogin} name="password" type="password" />
                                    </InputGroup></div>
                                <button type="button" className="btn btn-danger bg-light text-black" onClick={loginMe}  >Iniciar sesion</button>
                            </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}