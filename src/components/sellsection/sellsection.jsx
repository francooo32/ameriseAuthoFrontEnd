import React from 'react'
import "./sellsection.css"
import { Row, Col } from "react-bootstrap";
import logoPhoto from "../../public/sources/mitsu.png"
import BuyCarPageCarousel from "../../components/Carousel/buycarpagecarousel.jsx"
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
                  Los mejores autos seleccionados del mercado. <br/>
                  Nuestra agencia, con amplia experiencia, te <br/>
                  ofrece una gran variedad de marcas para <br/>
                  elegir.
                </h3>
                <div className="button-wrapper"> 
                <Button type={BUTTON_TYPES.PRIMARY} btnText="CONOCE NUESTRO STOCK DE VEHICULOS DISPONIBLES"/>
                </div>
                <hr/>
                <h4>Nuestro equipo capacitado está aquí para ayudarte a encontrar <br/>
                  el vehículo perfecto que se ajuste a tus necesidades. <br/>
                  Confía en nuestra trayectoria y descubre la calidad y <br/>
                  el servicio que nos distinguen.</h4>
                <h4>✨ Nuestra visión es ser líderes en el mercado de autos usados, <br/>
                  reconocidos por nuestra excelencia y confianza en cada transacción. <br/>
                  ¡Ven y descubre tu auto soñado con Vittoria!</h4>
                {/* <BuyCarPageCarousel/> */}
            </div>
          </Col>
        </Row>
        {/* <h1>Evelyn Denise</h1>
        <p>Fotografía</p>  */}
        
    </section>
  )
}

export default SellSection