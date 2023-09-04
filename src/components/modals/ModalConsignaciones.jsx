import { useNavigate, useLocation } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import "./ModalConsignaciones.css"
import 'animate.css';

export const ModalConsignaciones = ({ cancel }) => {

    const navigation = useNavigate();

    return (
        <>
            <div className="animate__animated animate__fadeInLeft modal-centrado">
                <div className="modal-s-consignaciones">
                    <div className="div-button-exit-consignaciones">
                        <button
                            className="buton-exit-consignaciones"
                            onClick={() => {
                                cancel(false);
                            }}
                        >
                            x
                        </button>
                    </div>

                    <div className="title-first-consignaciones">
                        <h1 className="h1-ng">BENEFICIOS DE LA CONSIGNACIÓN</h1>
                    </div>

                    <div className="modal-container-consignaciones">

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
                        <div className="title-footer-relevamiento">
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
                </div>

            </div>
            <div className="modal-backdrop show"></div>
        </>
    );

};