import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import Profile from "../Perfil/Profile";
import { Reservation } from "../Reservations/Reservation";
import { Menu } from "../Menu/Menu";
import { Contact } from "../Contact/Contact";
import { Admin } from "../Admin/Admin";
import { LoginAdmin } from "../Admin/LoginAdmin";




export const Body = () => {
    return (
        <>

            <Routes>
                <Route path="*" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Reservation" element={<Reservation />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/LoginAdmin" element={<LoginAdmin/>} />






            </Routes>

        </>

    );
}