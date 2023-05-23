import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/footer';
import Header2 from '../header2/header2';

class Editar_perfil extends React.Component {

	render() {

		return (
            <div>
                <Header2/>

                    <main role="main" className="flex-shrink-0 mt-5 mb-5">
                        <section className="">
                            <div className="container h-custom">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-md-9 col-lg-6 col-xl-5">
                                        <img src="../../img/perfil.png" className="img-fluid" alt="Sample image"/>                                           
                                    </div>

                                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                        <form>
                                            <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                                                <h3 className="">Editar tu perfil de usuario</h3>
                                            </div>

                                            <form>
                                                <form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Inserte sus nombres"/>
                                                            <label className="form-label" htmlFor="form3Example4">Nombres</label>
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Inserte sus apellidos"/>
                                                            <label className="form-label" htmlFor="form3Example4">Apellidos</label>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="form-group"> 
                                                                <select className="form-control" id="exampleFormControlSelect1">
                                                                    <option>Seleccionar</option>
                                                                    <option>Organización de personas con discapacidad</option>
                                                                    <option>Empresas</option>
                                                                    <option>Entidades de formación</option>
                                                                    <option>Entidad de intermediación laboral</option>
                                                                    <option>Entidad prestadora de servicios</option>
                                                                    <option>Entidad territorial</option>
                                                                    <option>Academia</option>
                                                                </select>
                                                                <label htmlFor="exampleFormControlSelect1">Actores sociales</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Nombre de la entidad"/>
                                                            <label className="form-label" htmlFor="form3Example4">Nombre de la entidad</label>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">                                                           
                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                <label htmlFor="exampleFormControlTextarea1">Descripción del perfil</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Contacto"/>
                                                            <label className="form-label" htmlFor="form3Example4">Contacto</label>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Ingrese su Ciudad"/>
                                                                <label htmlFor="exampleFormControlTextarea1">Ciudad</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Ingrese su departamento"/>
                                                            <label className="form-label" htmlFor="form3Example4">Departamento</label>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Ingrese su País"/>
                                                                <label htmlFor="exampleFormControlTextarea1">País</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="form-group"> 
                                                                <select className="form-control" id="exampleFormControlSelect1">
                                                                    <option>Seleccionar</option>
                                                                    <option>Conocimientos</option>
                                                                    <option>Buenas practicás</option>
                                                                    <option>Casos exitosos</option>
                                                                </select>
                                                                <label htmlFor="exampleFormControlSelect1">Intereses de conocimiento</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <br></br>

                                                <Button variant="primary" size="lg" active> Guardar </Button>{' '}
                                                <Button variant="secondary" size="lg" active> Cancelar </Button>
                                            </form>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                <Footer/>
            </div>          

		)

	}

}

export default Editar_perfil;