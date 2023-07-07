import React from 'react';
import { Row, Col } from "react-bootstrap";
import Models from "../../selectelements/models.jsx"
import "./modelselect.css"

const ModelSelect = () => {

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