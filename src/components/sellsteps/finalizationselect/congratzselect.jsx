import React from 'react';
import { useNavigate } from 'react-router-dom';
import {SUCCESS_BUY_ROUTE_REDIRECTION} from '../../../constants/constantsSellSteps.jsx'
import { Row, Col } from "react-bootstrap";
import FooterSellSection from '../../footer/footerSellSection.jsx';
import "./finalizationselect.css"

const   CongratzSelect = () => {
  const navigation = useNavigate();

  return (
    <>
    <div id="selectDivMain">
    <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='successDiv'>
            <h1>
              ¡Excelente!
            </h1>
            <p>
              Pronto un representante se pondra en contacto. <br/>
              Mientras tanto, conoce alguno de nuestros vehículos! <br/>
              <a onClick={() => navigation(SUCCESS_BUY_ROUTE_REDIRECTION)}> 
              Descubrir
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

export default CongratzSelect