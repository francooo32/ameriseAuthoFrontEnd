import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Colors from "../../selectelements/colors.jsx"
import "./colorselect.css"

const ColorSelect = () => {
    debugger
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

  return (
    <>
      <div className='modelDiv'>
        <h1>
          Selecciona el color de tu vehículo
        </h1>
      </div>
      <Colors />
    </>
  );
}

export default ColorSelect