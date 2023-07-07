import { useNavigate, useLocation } from 'react-router-dom';
import {FUEL_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import FooterSellSection from '../footer/footerSellSection.jsx';

const FUELS = [
    {id: 1, label: "Díesel"},
    {id: 2, label: "Gasolina"},
    {id: 3, label: "Híbrido"},
    {id: 4, label: "Eléctrico"},
]

function FuelList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();
    
    return(
        <>
            <div className="sideselect-list">
                {FUELS.map(fuel => 
                        <ul>
                                <li>
                                <input id="button" type="submit" value={fuel.label} onClick={() => navigation(FUEL_ROUTE_REDIRECTION, {
                            state:{
                                year : formCar.year,
                                brand: formCar.brand,
                                model: formCar.model,
                                version: formCar.version,
                                fuel: fuel.label
                                        }
                                    })
                                    }/>
                                    <hr id="yearHr"/>
                            </li>
                        </ul>
                    )}
                <FooterSellSection/>
            </div>

            
        </>
    );
}

export default FuelList;