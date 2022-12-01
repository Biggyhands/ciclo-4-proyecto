import React, { useState } from 'react';
import CopyRight from '../components/CopyRight';

import '../components/css/RegisterPage.css';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../util';

function RegisterPage() {

    const [ name, setName ]  = useState("")
    const [ email, setEmail ]  = useState("")
    const [ password, setPassword ]  = useState("")

    const submitHandler = async (e) =>{
        e.preventDefault()
        try{
            const { data } = await Axios.post('http://localhost:55000/api/users/signup',{
                name,
                email,
                password
            })
            window.alert('Usuario Registrado');
        }catch (err) {
            toast.error(getError(err));
        }
    }

    return (
        <div className='Layout' onSubmit={submitHandler}>
        <div className="container-signup">
            <div className="body-signup">
                <div className="saludo">
                    <p>REGISTRARSE</p>
                </div>
                <form className="form">
                    <label htmlFor="input-nombre">Nombre</label>
                    <input id="input-nombre" type="text" name="nombre" placeholder="Nombre" onChange={(e) => setName(e.target.value)} required/>
                    <label htmlFor="input-apodo">Apodo</label>
                    <input id="input-apodo" type="text" name="apodo" placeholder="apodo"  required/>
                    <label htmlFor="input-email">Correo</label>
                    <input id="input-email" type="email" name="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="input-password">Contraseña</label>
                    <input id="input-password" type="password" name="contraseña" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required/>
                    <button className="btn-login" type="submit">Registrarse</button>
                    <Link to={`/login`} >
                    <button className="btn-signup">Iniciar Sesión</button>
                    </Link>
                </form>      
            </div>
        </div>
        <CopyRight></CopyRight>
        </div>
    )
}

export default RegisterPage;