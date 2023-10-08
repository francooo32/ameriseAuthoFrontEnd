import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';
import logoMercadoLibre from "../../public/buysection/logomercadolibre.png"

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Search'
      value={value}
      onChange={changeInput}
    />
    {/* <h3>También podes descubrir nuestro stock disponible en 
      <a href="https://vehiculos.mercadolibre.com.ar/_CustId_243234445" target="_blank">
        <img id="logoMercado" src={logoMercadoLibre} alt="logoMercado"></img>
      </a>
    </h3> */}
  </div>
);

export default SearchBar;