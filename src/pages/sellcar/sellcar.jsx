import React, { useEffect, useState } from 'react';
import "./sellcar.css"
import { Row, Col } from "react-bootstrap";
import yearImg1 from "../../public/sources/audi.png"
import yearImg2 from "../../public/sources/mitsu2.png"
import YearSelect from "../../components/sellsteps/yearselect/yearselect.jsx"

const SellCar = () => {

  return (
    <div className="sellcar-container">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className="sellcar-text">
              <h1>¡Cotizamos tu auto!</h1>
          </div>
          <img id="yearImg1" src={yearImg1}></img>
          <YearSelect/>
          <img id="yearImg2" src={yearImg2}></img>
        </Col>
      </Row>
    </div>
  )
}

export default SellCar