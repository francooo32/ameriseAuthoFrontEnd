import React from 'react';
import { Row, Col } from "react-bootstrap";
import Colors from "../../selectelements/colors.jsx"
import "./colorselect.css"

const ColorSelect = () => {

  return (
    <>
    <div id="selectDivMain">
    <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='modelDiv'>
            <h1>
              Selecciona el color de tu vehículo
            </h1>
          </div>
          <Colors />
        </Col>
    </Row>
    </div>
    </>
  );
}

export default ColorSelect