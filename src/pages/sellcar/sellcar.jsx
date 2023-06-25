import React, { useEffect, useState } from 'react';
import "./sellcar.css"
import YearSelect from "../../components/sellsteps/yearselect/yearselect.jsx"

const SellCar = () => {

  return (
    <div className="sellcar-container">
        <div className="sellcar-text">
            <h1>¡Cotizamos tu auto!</h1>
        </div>
        <YearSelect/>
    </div>
  )
}

export default SellCar