import React, { useState } from 'react';
import Axios from "axios";
import { getError } from "../util";
import { toast } from "react-toastify";
import './css/ReportBox.css';

function ReportBox(){

    const [ name, setName] = useState("")
    const [ email, setLastname] = useState("")
    const [ issue, setIssue] = useState("")
    const [ description, setDescription] = useState("")

    const newTicket = {
        name,
        email,
        issue,
        description
    }

    const reportTicket = async(e) =>{
        e.preventDefault();
        try {
                fetch('http://localhost:55000/api/tickets/create', {
                    method: 'POST',
                    body: JSON.stringify(newTicket),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(res=>res.json).then(data=>console.log(data))
                window.alert('Ticket Creado')                
        } catch (error) {
            toast.error(getError(error));
        }
    }

    return (
        <div className="ReportBox">
            <div className="body-ReportBox">
                <div className="tittle-ReportBox">
                    <p>Reportar problema TI</p>
                </div>
                <form className="form" onSubmit={reportTicket}>
                    <input id="input-nombre" type="text" name="nombre" placeholder="Nombre" onChange={(e) => setName(e.target.value)} required/>
                    <input id="input-apellido" type="email" name="apellido" placeholder="Correo" onChange={(e) => setLastname(e.target.value)} required/>
                    <select className="select-ReportBox" name="select" onChange={(e) => setIssue(e.target.value)} required>
                        <option>Elegir problema</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>Network</option>
                        <option>Otro tipo</option>
                    </select>
                    <label htmlFor="input-descripcion">Descripcion</label>
                    <textarea id="input-descripcion" type="text" name="descripcion" placeholder="Descripcion" rows="2" cols="40" onChange={(e) => setDescription(e.target.value)} required/>
                    <button className="btn-login" type="submit" >Reportar</button>
                    <button className="btn-signup">Tickets</button>
                </form>      
            </div>
        </div>
    )
}

export default ReportBox;

