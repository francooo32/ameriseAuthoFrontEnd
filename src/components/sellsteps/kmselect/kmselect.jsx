import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Km from "../../selectelements/kms.jsx"
import "./kmselect.css"

const KmSelect = () => {
    debugger
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

  return (
    <>
      <div className='modelDiv'>
        <h1>
          Indicanos el kilometraje aproximado
        </h1>
      </div>
      <Km />
    </>
  );
}

export default KmSelect