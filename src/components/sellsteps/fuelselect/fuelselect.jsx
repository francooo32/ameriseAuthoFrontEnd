import React from 'react';
import { Row, Col } from "react-bootstrap";
import Fuels from "../../selectelements/fuels.jsx"
import "./fuelselect.css"

const FuelSelect = () => {

  return (
    <>
    <div id="selectDivMain">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='fuelDiv'>
            <h1>
              Indicanos el tipo de combustible
            </h1>
          </div>
              <Fuels />
        </Col>
      </Row>
    </div>
    </>
    );
}

export default FuelSelect