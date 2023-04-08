import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./modelselect.css"

const ModelSelect = () => {
    debugger
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

  return (
    <div className="sellcar-container">
        <div className="sellcar-text">
            <h1>Vende tu auto!</h1>
        </div>
        <div className="modelselect-list">
          
            <ul>
              <li>
              <input id="button" type="submit" value="x5" onClick={() => navigation("/contact", {
        state:{
          year : formCar.year,
          brand: formCar.brand,
          model: "x5"
        }
      })
    }/>
              </li>
            </ul>

        </div>
    </div>
        
  );
}

export default ModelSelect