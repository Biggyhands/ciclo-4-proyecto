import React from 'react';
import CopyRight from '../components/CopyRight';

import '../components/css/RegisterPage.css';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function RegisterPage() {
    return (
        <div className="container-signup">
            <div className="body-signup">
                <div className="saludo">
                    <p>REGISTRARSE</p>
                </div>
                <form className="form">
                    <label htmlFor="input-nombre">Nombre</label>
                    <input id="input-nombre" type="text" name="nombre" placeholder="Nombre" required/>
                    <label htmlFor="input-apellido">Apellido</label>
                    <input id="input-apellido" type="text" name="apellido" placeholder="Apellido" required/>
                    <label htmlFor="input-email">Correo</label>
                    <input id="input-email" type="email" name="email" placeholder="Correo" required/>
                    <label htmlFor="input-password">Contraseña</label>
                    <input id="input-password" type="password" name="contraseña" placeholder="Contraseña" required/>
                    <button className="btn-login">Registrarse</button>
                    <button className="btn-signup">Iniciar Sesión</button>
                </form>      
            </div>
        </div>
    )
}

export default RegisterPage;