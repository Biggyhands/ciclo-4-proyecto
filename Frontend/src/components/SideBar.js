import React from 'react';

import './css/SideBar.css';

function SideBar(){
    return (
        <div className="sideBar">
            <div className="img-container">
                <img src="./images/perfil-01.png"/>
            </div>
            <div>
                <ul>
                    <li>Johan Alexis Chavarria Bustos</li>
                    <li>Ingeniero de Software</li>
                    <li>Desarrollador JavScript FullStack</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Inicio</li>
                    <li>Tickets</li>
                    <li>Reportar</li>
                    <li>Resolver</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;