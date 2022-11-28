import React from 'react';
import CopyRight from '../components/CopyRight';

import '../components/css/LoginPage.css';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function LoginPage() {
    return (
        <div class="container-signin">
            <div class="body-signin">
                <div class="saludo">
                    <p>Bienvenido</p>
                </div>
                <form class="form">
                    <label for="input-email">Correo</label>
                    <input id="input-email" type="email" name="email" placeholder="Correo" required/>
                    <label for="input-password">Contraseña</label>
                    <input id="input-password" type="password" name="contraseña" placeholder="Contraseña" required/>
                    <button class="btn-login">Iniciar sesión</button>
                </form>
                    <div class="login-footer">
                        <a href="#" class="register">¿Olvidó su nombre de usuario o contraseña?</a>
                        <a href="#" class="register">¿Desea registrarse?</a>
                    </div>       
            </div>
        </div>
    )
}

export default LoginPage;