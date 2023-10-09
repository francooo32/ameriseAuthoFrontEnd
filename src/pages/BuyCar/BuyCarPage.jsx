
import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import {VEHICLES_LIST} from '../../vehicles/vehiclesList.jsx'
import {BRANDS} from '../../components/selectelements/brands.jsx'
import EmptyView from '../../components/common/EmptyView/EmptyView';
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import List from "../../components/List/List";
import ReactPaginate from 'react-paginate';
import './BuyCar.css';

const BuyCarPage = () => {
  
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState([0, 5000]);
    const [vehicles, setVehicles] = useState([]);
    const [list, setVehicleList] = useState([]);

    useEffect(() => {
        for(let i = 0; i < BRANDS.length; i++){
          const vehicleLoad = {
            id:BRANDS[i].id,
            checked:false,
            label:BRANDS[i].label
          }
          vehicles.push(vehicleLoad)
        }
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

      setVehicleList(VEHICLES_LIST);
      let updatedList = list;

      for(let i = 0; i < vehicles?.length; i++){
        if(vehicles[i]?.checked == true){
          updatedList = list;
          break
        }else{
          updatedList = VEHICLES_LIST;
        }
      }

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
    //   await fetchVehicleList();
      
    // }, []);

    useEffect(() => {
      // await loadFetch();
       applyFilters();
      
    }, [selectedRating, selectedCategory, vehicles, searchInput, selectedPrice]);
  
    const itemsPerPage = 12;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const itemsToDisplay = list.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(list.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % list.length;
      setItemOffset(newOffset);
    };

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
                {resultsFound ? <List list={itemsToDisplay} /> : <EmptyView />}
                  <div className="pagination-div">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName='pagination'
                        pageClassName='page-item'
                        pageLinkClassName='page-link-sup'
                        previousLinkClassName='page-link-sup'
                        activeLinkClassName='active' 
                      />
                </div>
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