import React, { createContext, useContext, useEffect, useState } from 'react';
import CopyRight from '../components/CopyRight';

import '../components/css/LoginPage.css';

import Axios from "axios";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../util';



function LoginPage() {
    const navigate = useNavigate()
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";

    const [ email, setEmail ]  = useState("")
    const [ password, setPassword ]  = useState("");

    

    const submitHandler = async (e) =>{
        e.preventDefault()
        try{
            const { data } = await Axios.post('http://localhost:55000/api/users/signin',{
                email,
                password
            })
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate("/home");
        }catch (err) {
            toast.error(getError(err));
        }
    }


    return (
        <div className='Layout'>
        <div className="container-signin">
            <div className="body-signin">
                <div className="saludo">
                    <p>BIENVENIDO</p>
                </div>
                <form className="form" onSubmit={submitHandler}>
                    <label htmlFor="input-email">Correo</label>
                    <input id="input-email" type="email" name="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="input-password">Contraseña</label>
                    <input id="input-password" type="password" name="contraseña" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required/>
                    <button className="btn-login" type="submit">Iniciar sesión</button>
                </form>
                    <div className="login-footer">
                        <Link to={`/register`} >
                            <button className="btn-signup">¿Desea registrarse?</button>
                        </Link>
                        <a href="#" className="register">¿Olvidó su nombre de usuario o contraseña?</a>
                    </div>       
            </div>
        </div>
        <CopyRight></CopyRight>
        </div>
    )
}

export default LoginPage;