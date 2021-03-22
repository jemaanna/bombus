import React from 'react';
import imagenes from '../../assets/img/imagenes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Categoria = () =>{
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <h1>NUESTRAS CATEGORIAS</h1>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <div class="card bg-dark text-white h-100">
                    <img src={imagenes.familia} class="card-img h-100" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Familia</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card bg-dark text-white h-100">
                    <img src={imagenes.labiales} class="card-img h-100" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Labiales</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card bg-dark text-white h-100">
                    <img src={imagenes.jabones} class="card-img h-100" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Jabones</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card bg-dark text-white h-100">
                    <img src={imagenes.arcilla} class="card-img h-100" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Arcilla</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card bg-dark text-white h-100">
                    <img src={imagenes.combos} class="card-img h-100" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Combos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categoria;