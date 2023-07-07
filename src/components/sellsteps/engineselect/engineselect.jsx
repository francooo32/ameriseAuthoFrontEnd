import React from 'react';
import { Row, Col } from "react-bootstrap";
import Engines from "../../selectelements/engines.jsx"
import "./engineselect.css"

const EngineSelect = () => {

  return (
    <>
    <div id="selectDivMain">
    <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='modelDiv'>
            <h1>
              ¿Cuál es el tipo de motor de tu vehíclo?
            </h1>
          </div>
          <Engines />
        </Col>
    </Row>
    </div>
    </>
  );
}

export default EngineSelect