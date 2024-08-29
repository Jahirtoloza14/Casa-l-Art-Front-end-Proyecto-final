import "./Admin.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState, useEffect, useMemo, useCallback, StrictMode, useRef } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../userSlice";
import DataTable from "react-data-table-component";
import { bringAllReservations, bringAllUsersCall, bringProfile, deleteReservationCall, deleteUserCall, editReservationCall, updateProfile } from "../../services/apiRoutes";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([ClientSideRowModelModule]);
export const Admin = () => {
    const userData = useSelector(getUserData)
    const [usersData, setUsersData] = useState([]);
    console.log(usersData, "esto es usersData ");
    const [userDataCopy, setUserDataCopy] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [profileData, setProfileData,] = useState({
        first_name: "",
        last_name: "",
        email: "",
        role: ""
    })
    console.log("ESTO ES ProfileData", profileData);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: "100%", height: "800px" }), []);
    const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: "id" },
        { field: "Name" },
        { field: "last_name" },
        { field: "user_id" },
        { field: "Menu" },
        { field: "Comensales" },
        { field: "table" },
        { field: "date" },
        {
            headerName: "Actions",
            field: "actions",
            cellRenderer: (params) => (
                <button className="btn btn-danger " id="button-delete"
                    onClick={() => {
                        const userConfirmed = window.confirm('Estas seguro que quiere eliminar la reserva');
                        if (userConfirmed) {
                            handleDelete(params.data.id)
                            window.alert('eliminado exitosamente');
                        }
                    }}>
                    <p className="text-button">Delete</p>
                </button>
            ),
        }
    ]);
    console.log(columnDefs, "datos de columnas")
    const defaultColDef = useMemo(() => {
        return {
            editable: true,
            cellDataType: false,
        };
    }, []);
    const toggleReadOnly = () => {
        setIsReadOnly(!isReadOnly);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const myData = await bringAllReservations(userData.token);
                setRowData(myData.data);
            } catch (error) {
                console.error("Error fetching data:");
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
    }, [rowData])
    // filtro de busqueda
    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current.api.setGridOption(
            "quickFilterText",
            document.getElementById("filter-text-box").value,
        );
    }, []);
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }
    // profile
    useEffect(() => {
        const fetchProfile = async () => {
            const myProfileData = await bringProfile(userData.token);
            setProfileData(myProfileData.data)
            setUserDataCopy(myProfileData.data);
        }
        fetchProfile()
    }, []);
    const UpdateProfile = async () => {
        const updatedProfile = await updateProfile(profileData, userData.token);
        console.log("perfil actualizado con exito");
    }
    // bring all users
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const myProfileData = await bringAllUsersCall(userData.token);
                console.log(myProfileData, "seteando prifiledata");
                setUsersData(myProfileData.data)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchProfile()
    }, []);
    useEffect(() => {
        console.log(usersData, "aqui esta  profile data bringprofile ");
    }, [usersData])
    // bring all reservations
    const onCellValueChanged = async (event) => {
        const updatedData = event.data;
        const idReservation = updatedData.id;
        try {

            const response = await editReservationCall(updatedData, userData.token, idReservation);
            console.log("Data updated successfully:", response.userData);
        } catch (error) {
            console.error("Error updating data:", error.response ? error.response.data : error.message);
        }
    };
    const handleDelete = async (id) => {
        try {
            await deleteReservationCall(id, userData.token);
            console.log("Reservation deleted successfully");
        } catch (error) {
            console.error("Error deleting reservation:", error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
             await deleteUserCall(id, userData.token);   
           
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleRowSelected = (state) => {
        setSelectedUser(state.selectedRows[0]); // selecciona el primer usuario seleccionado
    };

    const columns = [
        { name: "ID", selector: row => row.id },
        { name: "First Name", selector: row => row.first_name },
        { name: "Last Name", selector: row => row.last_name },
        { name: "Email", selector: row => row.email },
        { name: "Role Name", selector: row => row.role.name },
        {
            name: 'Actions',
            cell:(params) => (
                <button className="btn  " 
                    onClick={() => {
                        const userConfirmed = window.confirm('Estas seguro que quiere eliminar la reserva');
                        if (userConfirmed) {
                            handleDeleteUser(params.data.id)
                            window.alert('eliminado exitosamente');
                        }
                    }}>
                    <p className="text-button">Eliminar</p>
                </button>
            ),
        },
    ]
    return (
        <>
            <div className="col" id="admin">
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Perfil">
                        <div >
                            <div className="col rounded m-3 text-primary text-center"></div>
                            <p className="fs-2 m-2">Perfil</p>
                            <div className="p-2"><span className="container">ID:</span>
                                <input className="border-0 bg-transparent text-warning"
                                    type="text"
                                    name="id"
                                    value={profileData.id}
                                /></div>
                            <div className="p-2">    <span className="container">Nombre:</span>
                                <input className="border-0 bg-transparent text-warning"
                                    type="text"
                                    name="first_name"
                                    placeholder="Nombre"
                                    value={profileData.first_name}
                                    onChange={inputHandler}
                                    disabled={isReadOnly}
                                /></div>
                            <div className="p-2"><span className="container">Apellido:</span>
                                <input className="border-0 bg-transparent text-warning"
                                    type="text"
                                    name="last_name"
                                    placeholder="Apellido"
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
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Usuarios">
                        <div>
                            <h1>Usuarios</h1>
                            <DataTable
                                columns={columns}
                                data={usersData}
                                selectableRows
                                pagination
                                paginationPerPage={5}
                                onSelectedRowsChange={handleRowSelected}
                            />
                             <button className="btn btn-danger" onClick={handleDeleteUser} disabled={!selectedUser}>
                                        Eliminar Usuario Seleccionado
                                    </button>
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Citas" className="wrapper">
                        <h1>CITAS</h1>
                        <div style={containerStyle}>
                            <div className="example-wrapper">
                                <div className="example-header">
                                    <input
                                        type="text"
                                        id="filter-text-box"
                                        placeholder="Search..."
                                        onInput={onFilterTextBoxChanged}
                                    />
                                </div>
                                <div
                                    style={gridStyle}
                                    className="ag-theme-alpine"
                                >
                                    <AgGridReact
                                        ref={gridRef}
                                        rowData={rowData}
                                        columnDefs={columnDefs}
                                        defaultColDef={defaultColDef}
                                        onCellValueChanged={onCellValueChanged}
                                    />
                                   
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}