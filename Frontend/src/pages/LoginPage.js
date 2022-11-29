import React from 'react';
import CopyRight from '../components/CopyRight';

import '../components/css/LoginPage.css';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function LoginPage() {
    return (
        <div className="container-signin">
            <div className="body-signin">
                <div className="saludo">
                    <p>BIENVENIDO</p>
                </div>
                <form className="form">
                    <label htmlFor="input-email">Correo</label>
                    <input id="input-email" type="email" name="email" placeholder="Correo" required/>
                    <label htmlFor="input-password">Contraseña</label>
                    <input id="input-password" type="password" name="contraseña" placeholder="Contraseña" required/>
                    <button className="btn-login">Iniciar sesión</button>
                </form>
                    <div className="login-footer">
                        <button className="btn-signup">¿Desea registrarse?</button>
                        <a href="#" className="register">¿Olvidó su nombre de usuario o contraseña?</a>
                    </div>       
            </div>
        </div>
    )
}

export default LoginPage;