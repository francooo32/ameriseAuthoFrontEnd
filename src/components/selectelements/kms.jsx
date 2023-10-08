import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {KM_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import FooterSellSection from '../../components/footer/footerSellSection.jsx';

var km = 0;

function KmsList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    function handleChange(event) {
        km = event.target.value
    }

    return (
        <>
            <div className="sideselect-km-list">
                <form action="">
                    <input id="kmInput" type="number" name="km" onChange={handleChange} max="1000000"/>
                    <input id="button" type="submit" value="Siguiente" onClick={() => navigation(KM_ROUTE_REDIRECTION, {
                        state: {
                            year : formCar.year,
                                brand: formCar.brand,
                                model: formCar.model,
                                version: formCar.version,
                                fuel: formCar.fuel,
                                door: formCar.door,
                                transmission: formCar.transmission,
                                engine: formCar.engine,
                                body: formCar.body,
                                color: formCar.color,
                                km: km
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

export default KmsList;