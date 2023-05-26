import React from 'react'
import "./sellsection.css"
import { Row, Col } from "react-bootstrap";
import logoPhoto from "../../public/sources/mitsu.png"
import Button from '../button/button.jsx';
import { BUTTON_TYPES } from '../common/data/buttonConst.jsx';

const SellSection = () => {

  return (
    <section className="sellsection-container" id="buysection">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
            <div className="sellsection-img">
              <img src={logoPhoto} alt="logoPh"></img>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <div className="sellsection-text">
                <h1>Compra con garantía</h1>
                <h3>
                  Tenemos el auto que siempre quisiste, <br/>
                  los precios son 100% negociables, <br/>
                  tramitamos todo por vos y ofrecemos <br/>
                  amplias garantías.
                </h3>
                <div className="button-wrapper"> 
                <Button type={BUTTON_TYPES.PRIMARY} btnText="Conoce los vehículos que tenemos para ofrecerte"/>
                {/* <Button type={BUTTON_TYPES.SECONDARY} btnText="Contactame" /> */}
                </div>
                <hr/>
            </div>
          </Col>
        </Row>
        {/* <h1>Evelyn Denise</h1>
        <p>Fotografía</p>  */}
        
    </section>
  )
}

export default SellSection