import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Models from "../../selectelements/models.jsx"
import "./modelselect.css"

const ModelSelect = () => {
    debugger
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

  return (
    <>
      <div className='modelDiv'>
        <h1>
          Cuál es el modelo?
        </h1>
      </div>
      <Models />
    </>
  );
}

export default ModelSelect