import React from 'react';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../footer/footer';
import Header from '../header/header';


class Signup extends React.Component {

    render() {

        return (
            <div>
                <Header />
                    <main role="main" className="flex-shrink-0 mt-5 mb-5">

                        <section className="container">
                            <form className="form-horizontal" action='' method="POST">
                                <fieldset>
                                    <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                                        <h3 className="fw-bold">Registrarse</h3>
                                    </div>
                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="username">Nombres:</label>
                                        <div className="controls">
                                            <input type="text" id="username" name="username" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="username">Apellidos:</label>
                                        <div className="controls">
                                            <input type="text" id="username" name="username" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="actor_social">Tipo de actor social:</label>
                                        <div className="controls">
                                            <select name="actor_social" id="actor_social" className="form-control form-control-lg fs-6 bg-light">
                                                <option value="">Seleccione una opción</option>
                                                <option value="organización_personas_discapacidad">Organización de personas con discapacidad</option>
                                                <option value="empresas">Empresas</option>
                                                <option value="entidades_formación">Entidades de formación</option>
                                                <option value="entidad_intermediación_laboral">Entidad de intermediación laboral</option>
                                                <option value="entidad_prestadora_servicios">Entidad prestadora de servicios</option>
                                                <option value="entidad_territorial">Entidad territorial</option>
                                                <option value="academia">Academia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="entidad">Nombre de la entidad:</label>
                                        <div className="controls">
                                            <input type="text" id="entidad" name="entidad" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="Dperfil">Descripción del perfil:</label>
                                        <div className="controls">
                                            <input type="text" id="Dperfil" name="Dperfil" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="contacto">Contacto:</label>
                                        <div className="controls">
                                            <input type="number" id="contacto" name="contacto" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="ciudad">Ciudad:</label>
                                        <div className="controls">
                                            <input type="text" id="ciudad" name="ciudad" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="departamento">Departamento:</label>
                                        <div className="controls">
                                            <input type="text" id="departamento" name="departamento" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="pais">País:</label>
                                        <div className="controls">
                                            <input type="text" id="pais" name="pais" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="Iconocimiento">Intereses de conocimiento:</label>
                                        <div className="controls">
                                            <select name="Iconocimiento" id="Iconocimiento" className="form-control form-control-lg fs-6 bg-light">
                                                <option value="">Seleccione una opción</option>
                                                <option value="conocimientos">Conocimientos</option>
                                                <option value="Bpracticas">Buenas prácticas</option>
                                                <option value="Cexitosos">Casos exitosos</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="imagen_perfil">Seleccione una foto de perfil:</label>
                                        <div className="controls">
                                            <input type="file" id="imagen_perfil" name="imagen_perfil" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="contraseña">Contraseña:</label>
                                        <div className="controls">
                                            <input type="password" id="contraseña" name="contraseña" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="form-label fw-bolder d-flex justify-content-start" htmlFor="contraseña_confirm">Confirme la contraseña:</label>
                                        <div className="controls">
                                            <input type="password" id="contraseña_confirm" name="contraseña_confirm" placeholder="" className="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div className="control-group" >
                                        <div className="controls">
                                            <button type="button"  className="color-button-sign"><FontAwesomeIcon icon={faUserPlus} /> Registrarse</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </section>
                    </main>
                <Footer />
            </div>

        )

    }

}

export default Signup;