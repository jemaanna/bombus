import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Formulario = () =>{
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <h1>BUZON DE SUGERENCIAS</h1>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                <form class ="" >
                        <div className="col my-5">
                            <div className="row">
                                <div className="col form-group">
                                    <label>
                                        Nombre:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Nombre"/>
                                </div>
                                <div className="col form-group">
                                    <label>
                                        Apellido:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Apellido"/>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col form-group">
                                    <label>
                                        Direccion:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Direccion"/>
                                </div>
                                <div className="col form-group">
                                    <label>
                                        Telefono:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Telefono"/>
                                </div>
                                
                            </div>
                            <div className="row my-5">
                                <div className="col form-group">
                                    <label>
                                        Correo Electronico:
                                    </label>
                                    <input type="email" className="form-control" placeholder="Correo Electronico"/>
                                </div>
                                <div className="col form-group">
                                    <label>
                                        Celular:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Celular"/>
                                </div>
                            </div>
                        </div>
                        <div className="col my-5">
                            <div className="row">
                                <div className="col form-group">
                                    <textarea className="form-control" placeholder="Tu sugerencia">

                                    </textarea>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-lg-12">
                                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Enviar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Formulario;