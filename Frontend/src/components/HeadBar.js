import React from 'react';
import { Link } from 'react-router-dom';

import './css/HeadBar.css';

function HeadBar(){
    return (
        <div className="container-HeadBar">
            <div className="empresa">
                <Link to={`/home`} >
                    <div className="empresa-name">NOMBRE EMPRESA</div>
                    <div className="empresa-portal">Portal de Asistencia TI</div>
                </Link>
            </div>
            <div className="login">
                <Link to={`/register`} >
                    <button className="login-button-01">Registrarse</button>
                </Link>
                <Link to={`/login`} >
                    <button className="login-button-02">Iniciar Sesión</button>
                </Link>
            </div>                    
        </div>
    )
}

export default HeadBar;