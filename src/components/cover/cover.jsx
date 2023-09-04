import React, { useState } from 'react'
import { BUTTON_TYPES } from '../common/data/buttonConst.jsx';
import { Row, Col } from "react-bootstrap";
import {ModalConsignaciones} from '../modals/ModalConsignaciones.jsx'
import carPhoto from "../../public/sources/porch.png"
import logoPhoto from "../../public/Logos/2.png"
import Button from '../button/button.jsx';
import "./cover.css"
import 'animate.css';

const Cover = () => {

  const [isOpenModalNuevaConsignaciones, setIsOpenModalConsignaciones] = useState(false);

  return (
    <div className="cover-container">
       <Row className="aligh-items-center">
          <Col xs={11} md={11} xl={11}>
            <div className="cover-text">
            <img id="logoCover" src={logoPhoto} alt="logoPh"></img>
                <h3>
                  <h2>¿Querés vender tu auto usado sin complicaciones?</h2> <br/>
                  <br/>
                  En Vittoria Automobili, ofrecemos consignación de autos usados para garantizar 
                  una venta exitosa y sin estrés. <br/>
                  {/* ¡Confía en nosotros y obtén el mejor valor para tu vehículo! 💰 */}
                  </h3>
                <div className="button-wrapper"> 
                <Button type={BUTTON_TYPES.SECONDARY} btnText="Vendemos tu vehiculo"/>
                </div>
                <hr id="coverHr"/>
                  <a class="animate__animated animate__fadeInLeft" href="#buysection" id="refCompraCover">
                    Ver stock de vehiculos ↓
                    </a>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <div className="cover-img">
              <img src={carPhoto} alt="logoPh"></img>
            </div>
            <div className="cover-button-modal">
              <button id="modalCoverButton"
                onClick={() => setIsOpenModalConsignaciones(true)}>
                Consignaciones
              </button>
            </div>
          </Col>
        </Row>

        {isOpenModalNuevaConsignaciones && (
                  <ModalConsignaciones
                    cancel={setIsOpenModalConsignaciones}
                  />
                )}

    </div>
  )
}

export default Cover