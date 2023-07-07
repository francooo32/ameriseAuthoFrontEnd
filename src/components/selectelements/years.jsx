import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {YEAR_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'
import "./selects.css"
import YearModal from "./modals/yearmodal.jsx"
import FooterSellSection from '../../components/footer/footerSellSection.jsx';

const YEARS = [
    {id: 1, label: "2023"},
    {id: 2, label: "2022"},
    {id: 3, label: "2021"},
    {id: 4, label: "2020"},
    {id: 5, label: "2019"},
    {id: 6, label: "2018"},
    {id: 7, label: "2017"},
    {id: 8, label: "2016"},
    {id: 9, label: "2015"},
    {id: 10, label: "2014"},
    {id: 11, label: "2013"},
    {id: 12, label: "2012"},
    {id: 13, label: "2011"},
    {id: 14, label: "2010"}
]

function YearsList() {
    const [openModal, setOpenModal] = useState(false);
    const navigation = useNavigate();

    return(
        <>
            <div className="yearselect-list">
                {YEARS.map(year => 
                        <ul>
                                <li>
                                <input id="button" type="submit" value={year.label} onClick={() => navigation(YEAR_ROUTE_REDIRECTION, {
                            state:{
                            year : year.label
                                        }
                                    })
                                    }/>
                                <hr id="yearHr"/>
                            </li>
                        </ul>
                    )}
                   <button id="button" onClick={() => setOpenModal(true)}>Otros</button>
                   <hr id="yearHr"/>
                   <YearModal open={openModal} onClose={() => setOpenModal(false)}/>

              <FooterSellSection/>
            </div>
            

            
        </>
    );
}

export default YearsList;