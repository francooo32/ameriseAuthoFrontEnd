import React from 'react'
import { BUTTON_TYPES } from '../common/data/buttonConst.jsx';
import { Row, Col } from "react-bootstrap";
import "./cover.css"
import 'animate.css';
import carPhoto from "../../public/sources/porch.png"
import logoPhoto from "../../public/Logos/2.png"
import Button from '../button/button.jsx';

const Cover = () => {

  return (
    <div className="cover-container">
       <Row className="aligh-items-center">
          <Col xs={11} md={11} xl={11}>
            <div className="cover-text">
            <img id="logoCover" src={logoPhoto} alt="logoPh"></img>
                <h3>
                  <h2>¿Quieres vender tu auto usado sin complicaciones?</h2> <br/>
                  <br/>
                  En Vittoria Automobili, ofrecemos consignación de autos usados para garantizar 
                  una venta exitosa y sin estrés. <br/>
                  ¡Confía en nosotros y obtén el mejor valor para tu vehículo! 💰
                  </h3>
                <div className="button-wrapper"> 
                <Button type={BUTTON_TYPES.SECONDARY} btnText="Vendemos tu vehiculo"/>
                {/* <Button type={BUTTON_TYPES.SECONDARY} btnText="Contactame" /> */}
                </div>
                <hr/>
                  <a class="animate__animated animate__fadeInLeft" href="#buysection" id="refCompra">
                    Ver stock de vehiculos ↓
                    </a>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <div className="cover-img">
            <img src={carPhoto} alt="logoPh"></img>
            {/* <h1>AMERISE</h1> */}
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Cover