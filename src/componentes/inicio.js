import React from 'react';
import Slider from './modulos/slider';
import Compromiso from './modulos/compromiso';
import Categoria from './modulos/categoria';
import Formulario from './modulos/formulario';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Inicio = () => {
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <Slider/>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <Compromiso/>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <Categoria/>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <Formulario/>
                </div>
            </div>
        </div>
    )
}

export default Inicio;