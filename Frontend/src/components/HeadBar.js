import React from 'react';

import './css/HeadBar.css';

function HeadBar(){
    return (
        <div className="container">
            <div className="empresa">
                <div className="empresa-name">NOMBRE EMPRESA</div>
                <div className="empresa-portal">Portal de Asistencia TI</div>
            </div>
            <div className="login">
                <button className="login-button-01">Registrarse</button>
                <button className="login-button-02">Iniciar Sesión</button>
            </div>                    
        </div>
    )
}

export default HeadBar;