import React from 'react'
import "./cover.css"
import logoPhoto from "../../public/logoNew2.png"
import Button from '../button/button.jsx';
import { BUTTON_TYPES } from '../common/data/buttonConst.jsx';

const Cover = () => {

  return (
    <div className="cover-container">
        <div className="cover-text">
            <h1>Transformamos la compra y venta de autos usados en Argentina</h1>
            <h3>Tenemos más de 2,000 autos certificados y garantizados</h3>
            <div className="button-wrapper"> 
            <Button type={BUTTON_TYPES.PRIMARY} btnText="Compra el vehiculo de tus sueños!"/>
            {/* <Button type={BUTTON_TYPES.SECONDARY} btnText="Contactame" /> */}
            </div>
        </div>
        <div className="cover-img">
        <img src={logoPhoto} alt="logoPh"></img>
        </div>
        {/* <h1>Evelyn Denise</h1>
        <p>Fotografía</p>  */}
        
    </div>
  )
}

export default Cover