import React from 'react';
import { Link } from 'react-router-dom';
import './css/SideBar.css';

function SideBar(){

    const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null 

    const signouthandler = () => {
        localStorage.removeItem('userInfo')
    }

    return (
        <div className="sideBar">
            <div className="img-container">
                <img src={"https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"}></img>
            </div>
            <div className="info-user">
                <ul className="ul-sideBar">
                    <li className="li-pro-sideBar">Colaborador</li>
                    <li className="user-li-sideBar">Mauricio Caballero</li>
                    <li className="user-li-sideBar">El caballero</li>
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
            <Link to={`/login`}>
                <div className="final-sideBar">                
                    <div className="li-final-sideBar" onClick={signouthandler}>Cerrar sesión</div>                
                </div>
            </Link>
        </div>
    )
}

export default SideBar;