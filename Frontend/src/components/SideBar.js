import React from 'react';
import './css/SideBar.css';

function SideBar(){
    return (
        <div className="sideBar">
            <div className="img-container">
                <img src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"></img>
            </div>
            <div className="info-user">
                <ul className="ul-sideBar">
                    <li className="li-pro-sideBar">Colaborador</li>
                    <li className="user-li-sideBar">Johan Alexis Chavarria Bustos</li>
                    <li className="user-li-sideBar">Alekz</li>
                    <li className="user-li-sideBar">Desarrollador FullStack JavScript</li>
                </ul>
            </div>
            <div className="actions-user">
                <ul className="ul-sideBar">
                    <li className="li-pro-sideBar">Herramientas</li>
                    <li className="li-sideBar">Inicio</li>
                    <li className="li-sideBar">Tickets</li>
                    <li className="li-sideBar">Reportar</li>
                    <li className="li-sideBar">Resolver</li>
                </ul>
            </div>
            <div className="final-sideBar">
                <div className="li-final-sideBar">Cerrar sesión</div>
            </div>
        </div>
    )
}

export default SideBar;