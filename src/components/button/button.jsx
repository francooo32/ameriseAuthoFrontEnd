import React from "react";
import { useState, useEffect } from 'react';
import {useRef} from 'react';
import {Navigate} from "react-router-dom"
import { BUTTON_TYPES } from "../common/data/buttonConst";
import "./button.css"

const Button = (props) => {
  
  const {type, btnText}= props;

  const [goToBuy, setGoToBuy] = useState(false);

  const [goToSell, setGoToSell] = useState(false);

    const getButtonClass=()=>{
      switch(type){
        case BUTTON_TYPES.PRIMARY:
        return "primaryBtn button";

        case BUTTON_TYPES.SECONDARY:
            return 'secondaryBtn button';

            default:
              return 'tertiaryBtn button';
      }
    };

    if (goToBuy && type === BUTTON_TYPES.PRIMARY){
      
      return <Navigate to="/comprar" />

    }

    if (goToSell && type === BUTTON_TYPES.SECONDARY){
      
      return <Navigate to="/vender" />

    }

    if(type === BUTTON_TYPES.PRIMARY ){

      return (
        <div className={`${getButtonClass()}`} onClick={() => {
          setGoToBuy(true);
        }} >
          {btnText}
        </div>
      )

    }else if(type === BUTTON_TYPES.SECONDARY){

      return (
        <div className={`${getButtonClass()}`} onClick={() => {
          setGoToSell(true);
        }} >
          {/* <a href="#slider"> */}
          {btnText}
          {/* </a> */}
        </div>
      )
    } else {
      return (
        <div className={`${getButtonClass()}`} onClick={() => {
          // setGoToBuy(true);
        }} >
          {/* <a href="#slider"> */}
          {btnText}
          {/* </a> */}
        </div>
      )
    }

  }
  
  export default Button