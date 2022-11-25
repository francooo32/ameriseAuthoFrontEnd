import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItems.css';

function ListItem({item: { coverSrc, brand, model, price, km, rating }}) {
  const navigation = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => navigation("/detalle")}>
    {/* <img src={coverSrc} alt='' /> */}
    <img src='/images/newCars/bmw.jpg' alt='' />
    <header>
      <h1>{brand}</h1>
      <h4>{model}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <span>{km}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
  )
}

export default ListItem;
