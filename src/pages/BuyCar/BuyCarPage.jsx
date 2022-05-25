import { Box } from "@mui/material";
import CarList from "../../components/Car/ListContainer/CarList";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import List from "../../components/List/List";
import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView/EmptyView';
import { dataList } from '../../constants/constants';
import './BuyCar.css';

const BuyCarPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  
    const [cuisines, setCuisines] = useState([
      { id: 1, checked: false, label: 'Bmw' },
      { id: 2, checked: false, label: 'Chevrolet' },
      { id: 3, checked: false, label: 'Ferrari' },
    ]);
  
    const [list, setList] = useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');
  
    const handleSelectCategory = (event, value) =>
      !value ? null : setSelectedCategory(value);
  
    const handleSelectRating = (event, value) =>
      !value ? null : setSelectedRating(value);
  
    const handleChangeChecked = (id) => {
      const cuisinesStateList = cuisines;
      const changeCheckedCuisines = cuisinesStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setCuisines(changeCheckedCuisines);
    };
  
    const handleChangePrice = (event, value) => {
      setSelectedPrice(value);
    };
  
    const applyFilters = () => {
      let updatedList = dataList;
  
      // Rating Filter
      if (selectedRating) {
        updatedList = updatedList.filter(
          (item) => parseInt(item.rating) === parseInt(selectedRating)
        );
      }
  
      // Category Filter
      if (selectedCategory) {
        updatedList = updatedList.filter(
          (item) => item.category === selectedCategory
        );
      }
  
      // Cuisine Filter
      const cuisinesChecked = cuisines
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());
  
      if (cuisinesChecked.length) {
        updatedList = updatedList.filter((item) =>
          cuisinesChecked.includes(item.cuisine)
        );
      }
  
      // Search Filter
      if (searchInput) {
        updatedList = updatedList.filter(
          (item) =>
            item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1
        );
      }
  
      // Price Filter
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];
  
      updatedList = updatedList.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
  
      setList(updatedList);
  
      !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    };
  
    useEffect(() => {
      applyFilters();
    }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice]);
  
    return (
      <div className='home'>
        {/* Search Bar */}
        <SearchBar
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
        />
        <div className='home_panelList-wrap'>
          {/* Filter Panel */}
          <div className='home_panel-wrap'>
            <FilterPanel
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              selectedRating={selectedRating}
              selectedPrice={selectedPrice}
              selectRating={handleSelectRating}
              cuisines={cuisines}
              changeChecked={handleChangeChecked}
              changePrice={handleChangePrice}
            />
          </div>
          {/* List & Empty View */}
          <div className='home_list-wrap'>
            {resultsFound ? <List list={list} /> : <EmptyView />}
          </div>
        </div>
      </div>
    );
  };
  
  export default BuyCarPage;




// function BuyCarPage() {
//     return(
        
//         <div className='buyCarHome'>

//         <SearchBar></SearchBar>
        
//             <div className='home_panelList-wrap'>  
        
//                 <div className='home_panel-wrap'> 
        
//                     <FilterPanel></FilterPanel>
        
//                 </div>

//                 <div className='home_list-wrap'>

//                 <List></List>

//                 </div>

//             </div>

//         <Box sx={{padding: 2}}>
//             <CarList />
//         </Box>
    
//     </div>
//     );
// }


// export default BuyCarPage;