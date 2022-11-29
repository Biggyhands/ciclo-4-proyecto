import React from 'react';

import './css/ReportBox.css';

function ReportBox(){
    return (
        <div className="ReportBox">
            <div className="body-ReportBox">
                <div className="tittle-ReportBox">
                    <p>Reportar problema TI</p>
                </div>
                <form className="form">
                    <input id="input-nombre" type="text" name="nombre" placeholder="Nombre" required/>
                    <input id="input-apodo" type="text" name="apodo" placeholder="apodo" required/>
                    <select className="select-ReportBox" name="select" required>
                        <option>Elegir problema</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>Network</option>
                        <option>Otro tipo</option>
                    </select>
                    <label htmlFor="input-descripcion">Descripcion</label>
                    <textarea id="input-descripcion" type="text" name="descripcion" placeholder="Descripcion" rows="2" cols="40" required/>
                    <button className="btn-login">Reportar</button>
                    <button className="btn-signup">Tickets</button>
                </form>      
            </div>
        </div>
    )
}

export default ReportBox;

