import {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {BRAND_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import BrandModal from "./modals/brandmodal.jsx"
import FooterSellSection from '../../components/footer/footerSellSection.jsx';

export const BRANDS = [
    {id: 1, label: "Alfa Romeo", img: require('../../public/Logos/brandEmblems/alfaromeo.png').default},
    {id: 2, label: "Audi", img: require('../../public/Logos/brandEmblems/audi.png').default},
    {id: 3, label: "Baic", img: require('../../public/Logos/brandEmblems/baic.png').default},
    {id: 4, label: "Bmw", img: require('../../public/Logos/brandEmblems/bmw.png').default},
    {id: 5, label: "Changan", img: require('../../public/Logos/brandEmblems/changan.png').default},
    {id: 6, label: "Chery", img: require('../../public/Logos/brandEmblems/chery.png').default},
    {id: 7, label: "Chevrolet", img: require('../../public/Logos/brandEmblems/chevrolet.png').default},
    {id: 8, label: "Chrysler", img: require('../../public/Logos/brandEmblems/chrysler.png').default},
    {id: 9, label: "Citroën", img: require('../../public/Logos/brandEmblems/citroen.png').default},
    {id: 10, label: "Dfsk", img: require('../../public/Logos/brandEmblems/dfsk.svg').default},
    {id: 11, label: "Dodge", img: require('../../public/Logos/brandEmblems/dodge.png').default},
    {id: 12, label: "Ds", img: require('../../public/Logos/brandEmblems/ds.png').default},
    {id: 13, label: "Fiat", img: require('../../public/Logos/brandEmblems/fiat.png').default},
    {id: 14, label: "Ford", img: require('../../public/Logos/brandEmblems/ford.png').default},
    {id: 15, label: "Haval", img: require('../../public/Logos/brandEmblems/haval.svg').default},
    {id: 16, label: "Honda", img: require('../../public/Logos/brandEmblems/honda.png').default},
    {id: 17, label: "Hyundai", img: require('../../public/Logos/brandEmblems/hyundai.png').default},
    {id: 18, label: "Jac", img: require('../../public/Logos/brandEmblems/jac.png').default},
    {id: 19, label: "Jeep", img: require('../../public/Logos/brandEmblems/jeep.png').default},
    {id: 20, label: "Kia", img: require('../../public/Logos/brandEmblems/kia.png').default},
    {id: 21, label: "Kyc", img: require('../../public/Logos/brandEmblems/kyc.svg').default},
    {id: 22, label: "Land Rover", img: require('../../public/Logos/brandEmblems/landRover.png').default},
    {id: 23, label: "Lexus", img: require('../../public/Logos/brandEmblems/lexus.png').default},
    {id: 24, label: "Lifan", img: require('../../public/Logos/brandEmblems/lifan.svg').default},
    {id: 25, label: "Maserati", img: require('../../public/Logos/brandEmblems/maserati.svg').default},
    {id: 26, label: "Mercedes Benz", img: require('../../public/Logos/brandEmblems/mercedes.png').default},
    {id: 27, label: "Mini", img: require('../../public/Logos/brandEmblems/mini.png').default},
    {id: 28, label: "Mitsubishi", img: require('../../public/Logos/brandEmblems/mitsubishi.png').default},
    {id: 29, label: "Nissan", img: require('../../public/Logos/brandEmblems/nissan.png').default},
    {id: 30, label: "Peugeot", img: require('../../public/Logos/brandEmblems/peugeot.png').default},
    {id: 31, label: "Porsche", img: require('../../public/Logos/brandEmblems/porsche.png').default},
    {id: 32, label: "Ram", img: require('../../public/Logos/brandEmblems/ram.png').default},
    {id: 33, label: "Renault", img: require('../../public/Logos/brandEmblems/renault.png').default},
    {id: 34, label: "Shineray", img: require('../../public/Logos/brandEmblems/shineray.svg').default},
    {id: 35, label: "Smart", img: require('../../public/Logos/brandEmblems/smart.png').default},
    {id: 36, label: "Subaru", img: require('../../public/Logos/brandEmblems/subaru.png').default},
    {id: 37, label: "Suzuki", img: require('../../public/Logos/brandEmblems/suzuki.png').default},
    {id: 38, label: "Toyota", img: require('../../public/Logos/brandEmblems/toyota.png').default},
    {id: 39, label: "Volkswagen", img: require('../../public/Logos/brandEmblems/volk.png').default},
    {id: 40, label: "Volvo", img: require('../../public/Logos/brandEmblems/volvo.png').default},
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
                                <img src={brands.img}/>   
                                <input id="button" type="submit" value={brands.label} onClick={() => navigation(BRAND_ROUTE_REDIRECTION, {
                            state:{
                                year : formCar.year,
                                brand: brands.label
                                        }
                                    })
                                    }/>
                                    <hr id="brandHr"/>
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