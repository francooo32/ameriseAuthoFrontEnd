import { useNavigate, useLocation } from 'react-router-dom';
import { useState} from 'react';
import { Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import "./CarDetail.css"

function CarDetail() {
    
    debugger
    const location = useLocation();
    const carDetail = location.state    
    const navigation = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div className="cardetail-container">
            <Row className="aligh-items-center">
              <Col xs={12} md={12} xl={12}>
                <div className="cardetail-img">
                    <img src={carDetail.img.img} alt='imgCompra' />
                </div>

                <div className="cardetail-caracteristicas-desc">

                  <hr id="carDetailHr"/>

                  <h1>Características destacadas</h1>
                    <div className="cardetail-caracteristicas-title">
                      <ul>
                        <li>
                           <p>Combustible: {carDetail.details.caracteristicas.transmision}</p>
                        </li>
                        <li>
                           <p>Tipo de combustible: {carDetail.details.caracteristicas.combustible}</p>
                        </li>
                      </ul>

                      <ul>
                        <li>
                           <p>Puertas: {carDetail.details.caracteristicas.puertas}</p>
                        </li>
                        <li>
                           <p>Motor: {carDetail.details.caracteristicas.motor}</p>
                        </li>
                      </ul>
                    </div>
                    
                    <hr id="carDetailHr"/>

                </div>
              </Col>
            </Row>
            <Row className="aligh-items-center">
              <Col xs={12} md={12} xl={12}>
                <div className="cardetail-desc">
                    <div className="cardetail-title">
                        <h1>{carDetail.marca.brand} <h2>{carDetail.modelo.model} <h3>{carDetail.version.version}</h3></h2></h1>
                        <p>{carDetail.year.year} | {carDetail.kilometraje.km}</p>
                    </div>
                    <hr id="carDetailHr"/>
                    <div className="cardetail-profesion">
                        <h2>{carDetail.precio.price}</h2>
                    </div>
                    <hr id="carDetailHr"/>
                    <input id="buttonBuy" type="submit" value="Consultar" onClick={() => navigation("/contactbuy", {
                                state:{
                                    brand: carDetail.marca.brand,
                                    model: carDetail.modelo.model,
                                    version: carDetail.version.version,
                                    price: carDetail.precio.price,
                                    year: carDetail.year.year,
                                    km: carDetail.kilometraje.km,
                                    caracteristicas: carDetail.details.caracteristicas
                                            }
                                        })
                                        }/>

                              
                </div>

                <div className="cardetail-consignaciones-container">
                  <div className="cardetail-title-first-consignaciones">
                            <h1 className="h1-ng">BENEFICIOS DE LA CONSIGNACIÓN</h1>
                        </div>
                          <ul>
                              <li>
                              <p><FaCheck/> Fotografías Profesionales</p>
                              </li>
                              <li>
                              <p><FaCheck/> Equipo de ventas</p>
                              </li>
                              <li>
                              <p><FaCheck/> Trámites</p>
                              </li>
                              <li>
                              <p><FaCheck/> Venta a los 30 días</p>
                              </li>
                          </ul>
                      <div className="title-footer-consignaciones">
                          <h3 className="h3-ng">Si no se vende lo compramos nosotros!</h3>
                      </div>
                      <div className="cover-button-consignaciones">
                            <button id="consignacionesButton"
                                onClick={() => navigation("/consignaciones")}
                                >
                                Conoce mas!
                            </button>
                      </div>
                    </div>           

              </Col>
            </Row>
        </div>
      )
}

export default CarDetail;