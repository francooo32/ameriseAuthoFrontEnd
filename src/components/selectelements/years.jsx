import { useNavigate } from 'react-router-dom';
import "./selects.css"
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
    const navigation = useNavigate();

    return(
        <>
            <div className="yearselect-list">
                {/* {YEARS.map(car => <CarItem key={car.id} car={car} />)} */}
                {YEARS.map(year => 
                        <ul>
                                <li>
                                <input id="button" type="submit" value={year.label} onClick={() => navigation("/brandselect", {
                            state:{
                            year : year.label
                                        }
                                    })
                                    }/>
                                <hr id="yearHr"/>
                            </li>
                        </ul>
                    )}
                    
                    {/* <ul>
                            <li>
                            <input id="button" type="submit" value="2010" onClick={() => navigation("/brandselect", {
                        state:{
                        year : "2010"
                                    }
                                })
                                }/>
                        </li>
              </ul> */}
              <FooterSellSection/>
            </div>
            

            
        </>
    );
}

export default YearsList;