import "./Profile.css"
import { bringClientReservation, bringProfile, updateProfile } from "../../services/apiRoutes";
import { useEffect, useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../userSlice";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";



ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const Profile = () => {
    const userData = useSelector(getUserData)
    const [profileData, setProfileData,] = useState({
        first_name: "",
        last_name: "",
        email: "",
        role: ""


    })

    const gridRef = useRef();
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: "id" },
        { field: "Name" },
        { field: "last_name" },
        { field: "Comensales" },
        { field: "Menu" },
        { field: "table" },
        { field: "date" }

    ]);

    const [isReadOnly, setIsReadOnly] = useState(true);
    const [msg, setMsg] = useState("")

    // Función para alternar el modo de solo lectura
    const toggleReadOnly = () => {
        setIsReadOnly(!isReadOnly);
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }

    useEffect(() => {
        const fetchProfile = async () => {
            const myProfileData = await bringProfile(userData.token);
            setProfileData(myProfileData.data)
        }
        fetchProfile()

    }, []);

    useEffect(() => {
        const fetchAppointment = async () => {
            const myAppointmentData = await bringClientReservation(userData.token);
            setRowData(myAppointmentData.data)
        }
        fetchAppointment()
    }, []);
    const UpdateProfile = async () => {
       try {
        const myProfileUpdate = await updateProfile(profileData,userData.token)
        setMsg("Perfil Editado exitosamente, Reinicia la pagina")
       } catch (error) {
        console.error("Error updating data:", error.response ? error.response.data : error.message);
       }      
    }
    return (
        <>
            <div className="row-5 m-0  border rounded bg-light" id="profile">
                <div className=" border rounded col ">

                    {msg === "" ?
                        <div className="col rounded m-3 text-primary text-center">
                            <p className="fs-2 m-2">Perfil</p>
                            <div className="p-2"><span className="container">ID:</span>                            
                                <input className="border-0 bg-transparent text-warning"
                                    type="text"
                                    name="id"
                                    value={profileData.id}
                                    disabled={true}
                                /></div>
                            <div className="p-2">    <span className="container">Nombre:</span>
                                <input className="border-0 bg-transparent text-warning"
                                    type="text"
                                    name="first_name"
                                    placeholder="First name"
                                    value={profileData.first_name}
                                    onChange={inputHandler}
                                    disabled={isReadOnly}
                                /></div>
                            <div className="p-2"><span className="container">Apellido:</span>
                                <input className="border-0 bg-transparent text-warning"
                                    type="text"
                                    name="last_name"
                                    placeholder="last name"
                                    value={profileData.last_name}
                                    onChange={inputHandler}
                                    disabled={isReadOnly}
                                /></div>
                            <div className="p-2"><span className="container">Email:</span>
                                <input className="border-0 bg-transparent text-warning"
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={profileData.email}
                                    onChange={inputHandler}
                                    disabled={isReadOnly}
                                /></div>
                            <button className="col bg-light" onClick={toggleReadOnly}>
                                {isReadOnly ? 'Editar' : 'Cancelar'}
                            </button>
                            <button className="col bg-light" onClick={UpdateProfile}> Guardar
                            </button>
                        </div> : <div>{msg}</div>}
                </div>
                <h2>Cita</h2>
                <div className="" id="reservation" >
                    <div className="example-wrapper ">
                        <div
                            className="container-fluid ag-theme-quartz-dark" id="grid"
                        >
                            <AgGridReact
                                ref={gridRef}
                                rowData={rowData}
                                columnDefs={columnDefs}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profile;