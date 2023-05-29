import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Colors from "../../selectelements/colors.jsx"
import "./colorselect.css"

const ColorSelect = () => {
    debugger
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

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