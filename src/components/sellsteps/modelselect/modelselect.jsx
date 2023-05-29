import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Models from "../../selectelements/models.jsx"
import "./modelselect.css"

const ModelSelect = () => {
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
                Cuál es el modelo?
              </h1>
            </div>
            <Models />
          </Col>
      </Row>
    </div>
    </>
  );
}

export default ModelSelect