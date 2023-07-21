import React from 'react'
import { Row, Col } from "react-bootstrap";
import "./aboutus.css"
import 'animate.css';
import aboutImg from "../../public/about/aboutimg.png"
import logoPhoto from "../../public/Logos/2.png"
import FooterSellSection from '../footer/footerSellSection.jsx';

const AboutUs = () => {

  return (
    <>
      <div className="cover-container-about">
        <Row className="aligh-items-center">
          <Col xs={11} md={11} xl={11}>
            <div className="cover-text-about">
              <img id="logoAbout" src={logoPhoto} alt="logoAbout"></img>
              <h3>
                <h2>¡Conocé nuestra sucursal!</h2> <br />
                <br />
                Veni a ver tu auto o simplemente conocernos en persona, nuestra sede
                esta ubicada en Gaona, te esperamos!
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
      <FooterSellSection />
    </>
  )
}

export default AboutUs