import React from 'react';
import { Row, Col } from "react-bootstrap";
import Transmissions from "../../selectelements/transmissions.jsx"
import "./transmissionselect.css"

const TransmissionSelect = () => {

  return (
    <>
    <div id="selectDivMain">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='transmissionDiv'>
            <h1>
              ¿Qué tipo de transmisión usa tu vehículo?
            </h1>
          </div>
              <Transmissions />
        </Col>
      </Row>
    </div>
    </>
    );
}

export default TransmissionSelect