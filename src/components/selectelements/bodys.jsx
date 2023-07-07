import { useNavigate, useLocation } from 'react-router-dom';
import {BODY_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import FooterSellSection from '../footer/footerSellSection.jsx';

const BODYS = [
    {id: 1, label: "Sedán"},
    {id: 2, label: "Hatchback"},
    {id: 3, label: "Suv"},
    {id: 4, label: "Coupé"},
    {id: 5, label: "Pick-up"},
    {id: 6, label: "Roadster"},
    {id: 7, label: "Minivan"},
]

function BodyList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();
    
    return(
        <>
            <div className="sideselect-list">
                {BODYS.map(body => 
                        <ul>
                                <li>
                                <input id="button" type="submit" value={body.label} onClick={() => navigation(BODY_ROUTE_REDIRECTION, {
                            state:{
                                year : formCar.year,
                                brand: formCar.brand,
                                model: formCar.model,
                                version: formCar.version,
                                fuel: formCar.fuel,
                                door: formCar.door,
                                transmission: formCar.transmission,
                                engine: formCar.engine,
                                body: body.label
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

export default BodyList;