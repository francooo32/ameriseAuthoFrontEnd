import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {ENGINE_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import FooterSellSection from '../footer/footerSellSection.jsx';

var engine = "";

function EngineList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    function handleChange(event) {
        engine = event.target.value
    }

    return (
        <>
            <div className="sideselect-km-list">
                <form action="">
                    <input id="kmInput" type="text" name="engine" onChange={handleChange} />
                    <input id="button" type="submit" value="Siguiente" onClick={() => navigation(ENGINE_ROUTE_REDIRECTION, {
                        state: {
                            year : formCar.year,
                            brand: formCar.brand,
                            model: formCar.model,
                            version: formCar.version,
                            fuel: formCar.fuel,
                            door: formCar.door,
                            transmission: formCar.transmission,
                            engine: engine
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

export default EngineList;