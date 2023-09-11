import React from 'react'
import { Row, Col } from "react-bootstrap";
import "./aboutus.css"
import 'animate.css';
import aboutImg from "../../public/about/aboutimg.png"
import logoPhoto from "../../public/Logos/2.png"
import FooterSellSection from '../footer/footerSellSection.jsx';
import {VEHICLES_LIST} from '../../vehicles/vehiclesList.jsx'

const AboutUs = () => {

  return (
    <>
      <div className="cover-container-about">
        <div className="info">
        <Row className="aligh-items-left">
          <Col xs={9} md={9} xl={9}>
            <div className="cover-text-about">
              <img id="logoAbout" src={logoPhoto} alt="logoAbout"></img>
              <h3>
                <h2>¡Conocé nuestra sucursal!</h2> <br />
                <br />
                Vení a ver tu auto o simplemente conocernos en persona, nuestra sede
                esta ubicada en Av. Gaona 1449 - Paso del Rey, te esperamos!
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <div className="about-img">
              <img src={aboutImg} alt="logoPh"></img>
              {/* <h1>AMERISE</h1> */}
            </div>
          </Col>
        </Row>
        </div>
        <div className="seccion">
          <Row className="aligh-items-center">
            <Col xs={12} md={12} xl={12}>
          <div className='home_list-wrap-about'> 
            <div className='list-wrap-about'>
              <div className='listItem-wrap-about'> 
                      {/* <img src={img} alt='' /> */}
                      <header>
                        <h1>VITTORI PASO</h1>
                        <h2>Av. Gaona 1449</h2>
                      </header>
                      <footer>
                        <p>
                          <b>Inventario</b>
                          <li>+ {VEHICLES_LIST.length} Autos</li>
                        </p>
                        <button id="buttonAboutForm">
                          <a href="https://goo.gl/maps/yVmGHzuMidWsnV3r8" target='_blank'>Ver</a>
                          </button>
                      </footer>
                    </div>

                    <div className='listItem-wrap-about'> 
                      {/* <img src={img} alt='' /> */}
                      <header>
                        <h1>PROXIMAMENTE</h1>
                      </header>
                      <footer>
                      </footer>
                    </div>

                    <div className='listItem-wrap-about'> 
                      {/* <img src={img} alt='' /> */}
                      <header>
                        <h1>PROXIMAMENTE</h1>
                      </header>
                      <footer>
                      </footer>
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

export default AboutUs