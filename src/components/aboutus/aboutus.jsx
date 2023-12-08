import React from 'react'
import { Row, Col } from "react-bootstrap";
import {VEHICLES_LIST} from '../../vehicles/vehiclesList.jsx'
import logoPhoto from "../../public/Logos/2.png"
import FooterSellSection from '../footer/footerSellSection.jsx';
import "./aboutus.css"
import 'animate.css';

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
            {/* <div className="about-img"> */}
            <div className="about-map">
              {/* <img src={aboutImg} alt="logoPh"></img> */}
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Av. Gaona 1449 paso del rey&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections Unlimited</a>
                  </div>
                  {/* <style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas 
                    {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style> */}
                  </div>
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