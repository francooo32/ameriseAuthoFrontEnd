import React, { useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {DOOR_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import { validateIsNumber } from '../../utils/regex.jsx';
import { formaterStringBlockInvalidInput } from '../../utils/formater';
import FooterSellSection from '../footer/footerSellSection.jsx';
import "./selects.css"

function DoorList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();
    const [door, setDoor] = useState("");

    function handleChange(event) {
        console.log("Working:", event.target.value);
        // door = event.target.value
        validateIsNumber(event.target.value) ? setDoor(event.target.value) : (setDoor(formaterStringBlockInvalidInput(event.target.value)))
    }

    return (
        <>
            <div className="sideselect-km-list">
                <form action="">
                    <input id="kmInput" 
                    value={door}
                    type="text" 
                    name="door" 
                    maxlength="1" 
                    onChange={handleChange} 
                    />
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