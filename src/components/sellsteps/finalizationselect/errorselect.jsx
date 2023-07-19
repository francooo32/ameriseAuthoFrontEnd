import React from 'react';
import { useNavigate } from 'react-router-dom';
import {KM_ROUTE_REDIRECTION} from '../../../constants/constantsSellSteps.jsx'
import { Row, Col } from "react-bootstrap";
import FooterSellSection from '../../footer/footerSellSection.jsx';
import "./finalizationselect.css"

const ErrorSelect = () => {
  const navigation = useNavigate();

  return (
    <>
    <div id="selectDivMain">
    <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='errorDiv'>
            <h1>
              Algo salio mal :S
            </h1>
            <p>
              Por favor, reintenta en unos momentos! <br/>
              <a onClick={() => navigation(KM_ROUTE_REDIRECTION)}> 
              Volver
              </a>
            </p>
            <FooterSellSection/>
          </div>
        </Col>
    </Row>
    </div>
    </>
  );
}

export default ErrorSelect