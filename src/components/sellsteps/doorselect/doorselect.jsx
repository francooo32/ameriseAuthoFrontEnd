import React from 'react';
import { Row, Col } from "react-bootstrap";
import Doors from "../../selectelements/doors.jsx"
import "./doorselect.css"

const DoorSelect = () => {

  return (
    <>
    <div id="selectDivMain">
    <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='modelDiv'>
            <h1>
              Cuantas puertas tiene el vehículo?
            </h1>
          </div>
          <Doors />
        </Col>
    </Row>
    </div>
    </>
  );
}

export default DoorSelect