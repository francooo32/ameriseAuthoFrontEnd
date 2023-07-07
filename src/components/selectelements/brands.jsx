import {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {BRAND_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import BrandModal from "./modals/brandmodal.jsx"
import FooterSellSection from '../../components/footer/footerSellSection.jsx';

const BRANDS = [
    {id: 1, label: "Alfa Romeo"},
    {id: 2, label: "Audi"},
    {id: 3, label: "Baic"},
    {id: 4, label: "Bmw"},
    {id: 5, label: "Changan"},
    {id: 6, label: "Chery"},
    {id: 7, label: "Chevrolet"},
    {id: 8, label: "Chrysler"},
    {id: 9, label: "Citroën"},
    {id: 10, label: "Dfsk"},
    {id: 11, label: "Dodge"},
    {id: 12, label: "Ds"},
    {id: 13, label: "Fiat"},
    {id: 14, label: "Ford"},
    {id: 15, label: "Haval"},
    {id: 16, label: "Honda"},
    {id: 17, label: "Hyundai"},
    {id: 18, label: "Jac"},
    {id: 19, label: "Jeep"},
    {id: 20, label: "Kia"},
    {id: 21, label: "Kyc"},
    {id: 22, label: "Land Rover"},
    {id: 23, label: "Lexus"},
    {id: 24, label: "Lifan"},
    {id: 25, label: "Maserati"},
    {id: 26, label: "Mercedes Benz"},
    {id: 27, label: "Mini"},
    {id: 28, label: "Mitsubishi"},
    {id: 29, label: "Nissan"},
    {id: 30, label: "Peugeot"},
    {id: 31, label: "Porsche"},
    {id: 32, label: "Ram"},
    {id: 33, label: "Renault"},
    {id: 34, label: "Shineray"},
    {id: 35, label: "Smart"},
    {id: 36, label: "Subaru"},
    {id: 37, label: "Suzuki"},
    {id: 38, label: "Toyota"},
    {id: 39, label: "Volkswagen"},
    {id: 40, label: "Volvo"},
]

function BrandsList() {
    const [openModal, setOpenModal] = useState(false);
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();
    
    return(
        <>
            <div className="sideselect-list">
                {BRANDS.map(brands => 
                        <ul>
                                <li>
                                <input id="button" type="submit" value={brands.label} onClick={() => navigation(BRAND_ROUTE_REDIRECTION, {
                            state:{
                                year : formCar.year,
                                brand: brands.label
                                        }
                                    })
                                    }/>
                                    <hr id="yearHr"/>
                            </li>
                        </ul>
                    )}
                    <button id="buttonBrand" onClick={() => setOpenModal(true)}>Otros</button>
                    <hr id="brandOrModelHr"/>
                    <BrandModal open={openModal} onClose={() => setOpenModal(false)} formCar={formCar}/>

                <FooterSellSection/>
            </div>

            
        </>
    );
}

export default BrandsList;