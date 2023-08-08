import CarList from "../../components/Car/ListContainer/CarList";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import List from "../../components/List/List";
import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import EmptyView from '../../components/common/EmptyView/EmptyView';
import vehiclesJson from './json/vehicles.json';
import {VEHICLES_LIST} from '../../vehicles/vehiclesList.jsx'
import {BRANDS} from '../../components/selectelements/brands.jsx'
import './BuyCar.css';
import { useCallback } from "react";

const BuyCarPage = () => {
  
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState([0, 5000]);
  
    const [vehicles, setVehicles] = useState([]);
  
    // const [list, setList] = useState(dataList);

    const [list, setVehicleList] = useState([]);
    
    // useEffect(fetchVehicleList(), [fetch])

    useEffect(() => {
        // const fetchVehicleList = async () => {
        //   // async function fetchVehicleList(){
        //   // debugger
        //   try{
        //     const requestUrl = 'https://62f0385257311485d12e9ab4.mockapi.io/vehicleapi/vehicle';
        //     // const requestUrl = vehiclesJson;
        //     const resp = await fetch(requestUrl)
        //     setTimeout('', 6000);
        //     const json = await resp.json();
        //     setVehicleList(json)
        //   } catch {
        //     console.log('The url no trajo nada')
        //   }
        // }
        // fetchVehicleList();
        debugger
        for(let i = 0; i < BRANDS.length; i++){
          const vehicleLoad = {
            id:BRANDS[i].id,
            checked:false,
            label:BRANDS[i].label
          }
          vehicles.push(vehicleLoad)
        }
        debugger
        setVehicleList(VEHICLES_LIST);
        setVehicles(vehicles);
      }, [])

    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');
  
    const handleSelectCategory = (event, value) =>
      !value ? null : setSelectedCategory(value);
  
    const handleSelectRating = (event, value) =>
      !value ? null : setSelectedRating(value);
  
    const handleChangeChecked = (id) => {
      const vehiclesStateList = vehicles;
      const changeCheckedVehicles = vehiclesStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setVehicles(changeCheckedVehicles);
    };
  
    const handleChangePrice = (event, value) => {
      setSelectedPrice(value);
    };
    
    // Initial vehicle load
    // const applyFilters = () => {
    //   let updatedList = dataList;

      // Initial vehicle load
      const applyFilters = async () => {
        debugger
        // if(list <= 0){
        //   const requestUrl = 'https://62f0385257311485d12e9ab4.mockapi.io/vehicleapi/vehicle';
        //     // const requestUrl = vehiclesJson;
        //     const resp = await fetch(requestUrl)
        //     // setTimeout('', 6000);
        //     const json = await resp.json();
        //     debugger
        //     setVehicleList(json);
        //     // list = json;
        // }

      setVehicleList(VEHICLES_LIST);
      debugger
      let updatedList = list;

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
  
      // Vehicle Filter

      const vehicleChecked = vehicles
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());
  
      if (vehicleChecked.length) {
        updatedList = updatedList.filter((item) =>
        vehicleChecked.includes(item.brand.toLowerCase())
        );
      }
  
      // Search Filter

      if (searchInput) {
        updatedList = updatedList.filter(
          (item) =>
            item.brand.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1
        );
      }
  
      // Price Filter
      
      // const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[100000000];
  
      // updatedList = updatedList.filter(
      //   (item) => item.price >= minPrice && item.price <= maxPrice
      // );
  
      // setList(updatedList);

      if(updatedList.length > 0){
      setVehicleList(updatedList);
      !updatedList.length ? setResultsFound(false) : setResultsFound(true);
      }
  
      
    };

    // useEffect( async () => {
    //   debugger
    //   await fetchVehicleList();
      
    // }, []);

    useEffect(() => {
      // debugger
      // await loadFetch();
       applyFilters();
      
    }, [selectedRating, selectedCategory, vehicles, searchInput, selectedPrice]);
  
    return (
      <div className='buyCar'>
        {/* Search Bar */}
        
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
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
                      vehicles={vehicles}
                      changeChecked={handleChangeChecked}
                      changePrice={handleChangePrice}
                    />
                  </div>
          {/* List & Empty View */}
              <div className='home_list-wrap'>
                {resultsFound ? <List list={list} /> : <EmptyView />}
              </div>
            </div>
          </Col>
        </Row>
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