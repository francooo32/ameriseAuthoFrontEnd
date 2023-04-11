import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Brands from "../../selectelements/brands.jsx"
import "./brandselect.css"

const BrandSelect = () => {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

  return (
    <>
      <div className='brandDiv'>
        <h1>
          Elegí el año de tu auto
        </h1>
      </div>
      <Brands />
    </>
    );
}

export default BrandSelect