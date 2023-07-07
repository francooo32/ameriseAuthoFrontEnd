import React from 'react';
import { Row, Col } from "react-bootstrap";
import Bodys from "../../selectelements/bodys.jsx"
import "./bodyselect.css"

const BodySelect = () => {

  return (
    <>
    <div id="selectDivMain">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='bodyDiv'>
            <h1>
              Indicanos el tipo de carrocería
            </h1>
          </div>
              <Bodys />
        </Col>
      </Row>
    </div>
    </>
    );
}

export default BodySelect