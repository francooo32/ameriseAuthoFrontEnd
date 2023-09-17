import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItems.css';

function ListItem({item: { coverSrc, year, brand, model, price, km, location, version, img, caracteristicas }}) {
  const navigation = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => navigation("/detalle", {
        state:{
          img: {img},
          marca : {brand},
          modelo: {model},
          version: {version},
          ubicacion: {location},
          kilometraje: {km},
          precio: {price},
          year: {year},
          details: {caracteristicas}
        }
      })
    }> 
    
    <img src={img} alt='' />
    <header>
      <h1>{brand}</h1>
      <h2>{model} • {version}</h2>
      <h4>{location}</h4>
      <h4>{km}</h4>
    </header>
    <footer>
      <p>
        <b>{price}</b>
      </p>
    </footer>
  </div>
  )
}

export default ListItem;
