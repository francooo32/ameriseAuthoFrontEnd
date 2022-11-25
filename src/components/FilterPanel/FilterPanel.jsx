import React from 'react';
import { categoryList, ratingList } from '../../constants/constants';
import CheckboxProton from '../common/CheckboxProton/CheckboxProton';
import FilterListToggle from '../common/FilterListToggle/FilterListToggle';
import SliderProton from '../common/SliderProton/SliderProton';
import "./FilterPanel.css";

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  vehicles,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className='input-group'>
      <p className='label'>Category</p>
      <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    <div className='input-group'>
      <p className='label'>Marca</p>
      {vehicles.map((vehicle) => (
        <CheckboxProton
          key={vehicle.id}
          vehicle={vehicle}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className='input-group'>
      <p className='label'>Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;