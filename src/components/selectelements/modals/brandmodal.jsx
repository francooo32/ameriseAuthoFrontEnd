import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./modals.css"

var brand = "";

const BrandModal = ({open, onClose, formCar}) => {
  const navigation = useNavigate();
  function handleChange(event) {
    brand = event.target.value
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
                          <input id="brandInput" type="text" name="brand" onChange={handleChange}/>
                          <input id="brandButton" type="submit" value="Continuemos! ->" onClick={() => navigation("/modelselect", {
                              state: {
                                  modelFlag : true,
                                  year : formCar.year,
                                  brand : brand
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

export default BrandModal