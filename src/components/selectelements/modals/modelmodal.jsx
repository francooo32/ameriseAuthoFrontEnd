import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./modals.css"

var model = "";

const ModelModal = ({open, onClose, formCar, redirection}) => {
  const navigation = useNavigate();
  function handleChange(event) {
    model = event.target.value
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
                          <input id="brandInput" type="text" name="model" onChange={handleChange}/>
                          <input id="brandButton" type="submit" value="Continuemos! ->" onClick={() => navigation(redirection, {
                              state: {
                                  modelFlag : true,
                                  year : formCar.year,
                                  brand: formCar.brand,
                                  model: model
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

export default ModelModal