import React, { useState } from 'react'
import { Row, Col } from "react-bootstrap";
import logoPhoto from "../../public/Logos/2.png"
import 'animate.css';

const Login = () => {

  return (
    <div className="cover-container">
       <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <div className="cover-text">
            <img id="logoCover" src={logoPhoto} alt="logoPh"></img>
             <div className="input-box">
                <input type='text' placeholder='Username' required></input>
             </div>
             <div className="input-box">
                <input type='password' placeholder='Password' required></input>
             </div>
             <button type='submit'>Ingresar</button>
            </div>
          </Col>
        </Row>

    </div>
  )
}

export default Login