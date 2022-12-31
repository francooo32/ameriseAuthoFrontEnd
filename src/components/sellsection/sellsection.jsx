import React from 'react'
import "./sellsection.css"
import logoPhoto from "../../public/logoNew2.png"
import Button from '../button/button.jsx';
import { BUTTON_TYPES } from '../common/data/buttonConst.jsx';

const SellSection = () => {

  return (
    <div className="sellsection-container">
        <div className="sellsection-text">
            <h1>Cambiá o vendé tu auto en 1 solo día</h1>
            <h3>Vende tu auto de manera rápida y segura</h3>
            <div className="button-wrapper"> 
            <Button type={BUTTON_TYPES.SECONDARY} btnText="Vende tu auto ya mismo!"/>
            {/* <Button type={BUTTON_TYPES.SECONDARY} btnText="Contactame" /> */}
            </div>
        </div>
        <div className="sellsection-img">
        <img src={logoPhoto} alt="logoPh"></img>
        </div>
        {/* <h1>Evelyn Denise</h1>
        <p>Fotografía</p>  */}
        
    </div>
  )
}

export default SellSection