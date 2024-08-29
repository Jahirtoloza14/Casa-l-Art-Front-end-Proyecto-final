import React from 'react';
import "./Contact.css";

export const Contact = () => {

    return (
    <>
        <div className='col' id="contact">
            <div className='row'> <div className=" ">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.270534418801!2d-0.7818396999999998!3d38.3889934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c670767887e5%3A0xe182fdf34a610536!2sCasa%20l&#39;Art%20Restaurante!5e0!3m2!1ses!2ses!4v1724584673159!5m2!1ses!2ses" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div></div>
            <div className="row" id="text">
                <p className='col fs-1 text-center'>Visitanos</p>
                <div className='row'></div>
                <div className='row'>
                    <p>Paraje Cucucho C-8</p>
                    <p>03660- Novelda</p>
                    <p>Viernes y Sábados de 14.00h a 01.30h y Domingos de 14.00h a 21.00h
                        Cenas Viernes y Sábados
                        Comidas Viernes, Sábados y Domingos</p>
                </div>
            </div>
        </div>
    </>
    )
}
