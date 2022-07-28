import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItems.css';

function ListItem({item: { coverSrc, title, price, deliveryFee, serviceTime, rating }}) {
  const navigation = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => navigation("/detalle")}>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
  )
}

export default ListItem;
