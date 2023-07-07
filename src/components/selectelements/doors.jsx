import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {DOOR_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import FooterSellSection from '../footer/footerSellSection.jsx';

var door = 0;

function DoorList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    function handleChange(event) {
        console.log("Working:", event.target.value);
        door = event.target.value
    }

    return (
        <>
            <div className="sideselect-km-list">
                <form action="">
                    <input id="kmInput" type="number" name="door" onChange={handleChange} max="1000000"/>
                    <input id="button" type="submit" value="Siguiente" onClick={() => navigation(DOOR_ROUTE_REDIRECTION, {
                        state: {
                                year : formCar.year,
                                brand: formCar.brand,
                                model: formCar.model,
                                version: formCar.version,
                                fuel: formCar.fuel,
                                door: door
                            }
                        })
                        } 
                    />
                </form>
                <FooterSellSection/>
            </div>
        </>
    );
}

export default DoorList;