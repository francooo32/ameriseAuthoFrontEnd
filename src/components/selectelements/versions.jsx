import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {VERSION_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import FooterSellSection from '../footer/footerSellSection.jsx';

var version = "";

function VersionList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    function handleChange(event) {
        version = event.target.value
    }

    return (
        <>
            <div className="sideselect-km-list">
                <form action="">
                    <input id="kmInput" type="text" name="version" onChange={handleChange}/>
                    <input id="button" type="submit" value="Siguiente" onClick={() => navigation(VERSION_ROUTE_REDIRECTION, {
                        state: {
                            year : formCar.year,
                            brand: formCar.brand,
                            model: formCar.model,
                            version: version
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

export default VersionList;