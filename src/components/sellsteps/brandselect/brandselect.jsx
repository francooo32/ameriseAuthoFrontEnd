import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./brandselect.css"

const BrandSelect = () => {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

  return (
    <div className="sellcar-container">
        <div className="sellcar-text">
            <h1>Vende tu auto!</h1>
        </div>
        <div className="brandselect-list">
          
            <ul>
              <li>
              <input id="button" type="submit" value="Bmw" onClick={() => navigation("/modelselect", {
        state:{
          year : formCar.year,
          brand: "Bmw"
        }
      })
    }/>
              </li>
            </ul>

        </div>
    </div>
        
  );
}

export default BrandSelect