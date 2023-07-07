import React from 'react';
import { Row, Col } from "react-bootstrap";
import Versions from "../../selectelements/versions.jsx"
import "./versionselect.css"

const VersionSelect = () => {

  return (
    <>
    <div id="selectDivMain">
    <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='modelDiv'>
            <h1>
              Indicanos la versión del vehículo
            </h1>
          </div>
          <Versions />
        </Col>
    </Row>
    </div>
    </>
  );
}

export default VersionSelect