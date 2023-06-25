import React from 'react'
import "./cover.css"
import 'animate.css';
import { Row, Col } from "react-bootstrap";
import logoPhoto from "../../public/sources/porch.png"
import Button from '../button/button.jsx';
import { BUTTON_TYPES } from '../common/data/buttonConst.jsx';

const Cover = () => {

  return (
    <div className="cover-container">
       <Row className="aligh-items-center">
          <Col xs={11} md={11} xl={11}>
            <div className="cover-text">
                <h1>AMERISE 
                  Automobili
                </h1>
                <h3>Compra y vende con nosotros de forma segura!</h3>
                <div className="button-wrapper"> 
                <Button type={BUTTON_TYPES.SECONDARY} btnText="Vende tu vehículo"/>
                {/* <Button type={BUTTON_TYPES.SECONDARY} btnText="Contactame" /> */}
                </div>
                <hr/>
                  <a class="animate__animated animate__fadeInLeft" href="#buysection" id="refCompra">
                    ¡Tenemos el auto que buscas! ↓
                    </a>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <div className="cover-img">
            <img src={logoPhoto} alt="logoPh"></img>
            {/* <h1>AMERISE</h1> */}
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Cover