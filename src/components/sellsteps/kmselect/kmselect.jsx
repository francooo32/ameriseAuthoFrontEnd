import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Km from "../../selectelements/kms.jsx"
import "./kmselect.css"

const KmSelect = () => {
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
              Indicanos el kilometraje aproximado
            </h1>
          </div>
          <Km />
        </Col>
    </Row>
    </div>
    </>
  );
}

export default KmSelect