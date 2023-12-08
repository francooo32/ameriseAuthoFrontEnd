import React from 'react'
import { Row, Col } from "react-bootstrap";
import carPhoto from "../../public/sources/porch2.png"
import carPhoto2 from "../../public/sources/porch.png"
import carPhoto3 from "../../public/sources/mitsu.png"
import carPhoto4 from "../../public/sources/mitsu2.png"
import "./zerokmsection.css"

const ZeroKmSection = () => {
  return (
    <>
      <div className="cover-container-zerokm">
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>

            <div className="carousel">

                <div className="list">
                    <div className="items">
                        <img src={carPhoto} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="version">Typ 4S</div>
                                <div className="brand">AUDI</div>
                                <div className="model">R8</div>
                                <div className="description">
                                    La segunda generación del R8 (código de modelo: Typ 4S) se reveló en el Salón del 
                                    Automóvil de Ginebra de 2015 y está basado en la plataforma Modular Sports System compartida con el Lamborghini 
                                    Huracán.
                                </div>
                                <div className="carouselButtn">
                                    <button>Consultar</button>
                                    <button>Ver mas!</button>
                                </div>
                            </div>
                    </div>

                    <div className="items">
                        <img src={carPhoto2} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="description1">DESCRIPTION</div>
                                <div className="description2">DESCRIPTION 2</div>
                                <div className="carouselButtn">
                                    <button>Consultar</button>
                                    <button>Ver mas!</button>
                                </div>
                            </div>
                            
                    </div>

                    <div className="items">
                        <img src={carPhoto3} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="description1">DESCRIPTION</div>
                                <div className="description2">DESCRIPTION 2</div>
                                <div className="carouselButtn">
                                    <button>Consultar</button>
                                    <button>Ver mas!</button>
                                </div>
                            </div>
                    </div>

                    <div className="items">
                        <img src={carPhoto4} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="description1">DESCRIPTION</div>
                                <div className="description2">DESCRIPTION 2</div>
                                <div className="carouselButtn">
                                    <button>Consultar</button>
                                    <button>Ver mas!</button>
                                </div>
                            </div>
                    </div>

                    {/* ThUMBNAILS */}

                    <div className="thumbnails">
                        <div className="items">
                            <img src={carPhoto} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="title">AUDI</div>
                                <div className="description">R8</div>
                            </div>
                        </div>

                        <div className="items">
                            <img src={carPhoto2} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="title">AUDI</div>
                                <div className="description">R8</div>
                            </div>
                        </div>

                        <div className="items">
                            <img src={carPhoto3} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="title">AUDI</div>
                                <div className="description">R8</div>
                            </div>
                        </div>

                        <div className="items">
                            <img src={carPhoto4} alt="carouselImg"/>
                            <div className="img-content">
                                <div className="title">AUDI</div>
                                <div className="description">R8</div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ZeroKmSection