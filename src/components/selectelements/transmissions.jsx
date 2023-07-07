import { useNavigate, useLocation } from 'react-router-dom';
import {TRANSMISSION_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import FooterSellSection from '../footer/footerSellSection.jsx';

const TRANSMISSIONS = [
    {id: 1, label: "Manual"},
    {id: 2, label: "Automático"},
]

function TransmissionList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();
    
    return(
        <>
            <div className="sideselect-list">
                {TRANSMISSIONS.map(transmission => 
                        <ul>
                                <li>
                                <input id="button" type="submit" value={transmission.label} onClick={() => navigation(TRANSMISSION_ROUTE_REDIRECTION, {
                            state:{
                                year : formCar.year,
                                brand: formCar.brand,
                                model: formCar.model,
                                version: formCar.version,
                                fuel: formCar.fuel,
                                door: formCar.door,
                                transmission: transmission.label
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

export default TransmissionList;