import React from 'react'
import { Row, Col } from "react-bootstrap";
import { BUTTON_TYPES } from '../common/data/buttonConst.jsx';
import {VEHICLES_LIST} from '../../vehicles/vehiclesList.jsx'
import { BiTask, BiHappyBeaming } from "react-icons/bi";
import { IoMdMegaphone } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import aboutImg from "../../public/about/consignaciones2.jpg"
import logoPhoto from "../../public/Logos/2.png"
import Button from '../button/button.jsx';
import FooterSellSection from '../footer/footerSellSection.jsx';

import "./consignaciones.css"
import 'animate.css';

const Consignaciones = () => {

  return (
    <>
      <div className="cover-container-consignaciones">
        <div className="info-consignacion">
        <Row className="aligh-items-left">
          <Col xs={9} md={9} xl={9}>
            <div className="cover-text-consignaciones">
              <img id="logoConsignaciones" src={logoPhoto} alt="logoconsignaciones"></img>
              <h3>
                <h2>¡Nuestras consignaciones!</h2> <br />
                En VITTORIA ofrecemos servicios de consignación para ayudarte a vender tu vehículo de manera rápida y eficiente.
              </h3>
              <div className="secondaryBttnDiv">
              <Button type={BUTTON_TYPES.SECONDARY} btnText="¡Vendé con nosotros!"/>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <div className="consignaciones-img">
              <img src={aboutImg} alt="logoPh"></img>
            </div>
          </Col>
        </Row>
        </div>
        <div className="seccion-consignacion">
          <Row className="aligh-items-center">
            <Col xs={12} md={12} xl={12}>
          <div className="consignacion-title">
            <h1>¿Cómo funciona?</h1>
          </div>
          <div className='home_list-wrap-consignaciones'> 
            <div className='list-wrap-consignaciones'>
              <div className='listItem-wrap-consignaciones'> 
                      <BiTask/>
                      <header>
                        <h1>EVALUAMOS TU AUTO</h1>
                        <h2>Nuestros profesionales determinarán el valor justo de mercado.</h2>
                      </header>
                    </div>

                    <div className='listItem-wrap-consignaciones'> 
                    <IoMdMegaphone/>
                      <header>
                        <h1>LO PROMOCIONAMOS</h1>
                        <h2>Nos encargamos de todo el proceso de publicidad y promoción.</h2>
                      </header>
                    </div>

                    <div className='listItem-wrap-consignaciones'> 
                    <FaHandshake/>
                      <header>
                        <h1>NEGOCIAMOS POR VOS</h1>
                        <h2>Obtendremos el mejor precio por tu vehículo.</h2>
                      </header>
                    </div>

                    <div className='listItem-wrap-consignaciones'> 
                    <BiHappyBeaming/>
                      <header>
                        <h1>RELAJATE!</h1>
                        <h2>Solo tenes que esperar noticias! Nuestro equipo es el más eficiente.</h2>
                      </header>
                    </div>

                    
                </div>  
            </div>                     
            </Col>
          </Row>
        </div>
      </div>
      <FooterSellSection />
    </>
  )
}

export default Consignaciones