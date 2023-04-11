import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Years from "../../selectelements/years.jsx"
import "./yearselect.css"

const YearSelect = () => {

    const navigation = useNavigate();

  return (
    <>
    <div className='yearDiv'>
      <h1>
        Elegí el año de tu auto 
      </h1>
    </div>
    <Years />
    </>
    //     <div className="yearselect-list">
          
    //         <ul>
    //           <li>
    //           <input id="button" type="submit" value="2010" onClick={() => navigation("/brandselect", {
    //     state:{
    //       year : "2010"
    //     }
    //   })
    // }/>
    //           </li>
    //           <li>
    //           <input id="button" type="submit" value="2011" onClick={() => navigation("/brandselect", {
    //     state:{
    //       year : "2011"
    //     }
    //   })
    // }/>
    //           </li>
    //         </ul>

    //     </div>
  );
}

export default YearSelect