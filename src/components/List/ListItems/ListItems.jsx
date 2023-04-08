import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItems.css';

function ListItem({item: { coverSrc, brand, model, price, km, rating, location }}) {
  const navigation = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => navigation("/detalle", {
        state:{
          marca : {brand}
        }
      })
    }> 
    
    {/* <img src={coverSrc} alt='' /> */}
    <img src='/images/newCars/bmw.jpg' alt='' />
    <header>
      <h1>{brand}</h1>
      <h4>{model} • {location} • {km}</h4>
      {/* <h4>{location}</h4>
      <h4>{km}</h4> */}
    </header>
    <footer>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
  )
}

export default ListItem;
