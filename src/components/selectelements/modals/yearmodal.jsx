import React from 'react'
import "./modals.css"
import { Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

var year = 0;

const YearModal = ({open, onClose}) => {
  const navigation = useNavigate();

  function handleChange(event) {
    year = event.target.value
  }
  if(!open) return null
  return (
    <div className="overlay">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='modalContainer'>
                <div className="modalRight">
                  <p id="closeX" onClick={onClose} className="closeBtn">x</p>
                  <div className="modalContent">
                      <form action="">
                          <input id="yearInput" type="number" name="year" max="1000" onChange={handleChange}/>
                          <input id="yearButton" type="submit" value="Continuemos! ->" onClick={() => navigation("/brandselect", {
                              state: {
                                  year : year,
                                  }
                              })
                              } 
                          />
                      </form>
                  </div>
                </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default YearModal