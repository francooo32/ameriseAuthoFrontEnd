import {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ALFAROMEO, AUDI, BAIC, BMW, CHANGAN, CHERY, CHEVROLET, CHRYSLER,
        CITROEN, DFSK, DODGE, DS, FIAT, FORD, HAVAL, HONDA, HYUNDAI, JAC,
        JEEP, KIA, KYC, LAND_ROVER, LEXUS, LIFAN, MASERATI, MERCEDES_BENZ, MINI,
        MITSUBISHI, NISSAN, PEUGEOT, PORSCHE, RAM, RENAULT, SHINERAY, SMART,
        SUBARU, SUZUKI, TOYOTA, VOLKSWAGEN, VOLVO } from '../vehiclemodels/modelslist.jsx';
import {MODEL_ROUTE_REDIRECTION} from '../../constants/constantsSellSteps.jsx'         
import ModelModal from "./modals/modelmodal.jsx"
import FooterSellSection from '../../components/footer/footerSellSection.jsx';
import "./selects.css"


function ModelList() {
    const [openModal, setOpenModal] = useState(false);
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    if(formCar.modelFlag){
        return(
            <>
                <div className="sideselect-list">
                    <button id="buttonBrand" onClick={() => setOpenModal(true)}>Otros</button>
                    <hr id="brandOrModelHr"/>
                    <ModelModal open={openModal} onClose={() => setOpenModal(false)} formCar={formCar} 
                                redirection={MODEL_ROUTE_REDIRECTION}/>

                    <FooterSellSection/>
                </div>
            </>
        );
    }
    //ALFA ROMEO
    if(formCar.brand == "Alfa Romeo"){
        return(
            <>
                <div className="sideselect-list">
                    {ALFAROMEO.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //AUDI
    if(formCar.brand == "Audi"){
        return(
            <>
                <div className="sideselect-list">
                    {AUDI.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //BAIC
    if(formCar.brand == "Baic"){
        return(
            <>
                <div className="sideselect-list">
                    {BAIC.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //BMW
    if(formCar.brand == "Bmw"){
        return(
            <>
                <div className="sideselect-list">
                    {BMW.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //CHANGAN
    if(formCar.brand == "Changan"){
        return(
            <>
                <div className="sideselect-list">
                    {CHANGAN.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //CHERY
    if(formCar.brand == "Chery"){
        return(
            <>
                <div className="sideselect-list">
                    {CHERY.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //CHEVROLET
    if(formCar.brand == "Chevrolet"){
        return(
            <>
                <div className="sideselect-list">
                    {CHEVROLET.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //CHRYSLER
    if(formCar.brand == "Chrysler"){
        return(
            <>
                <div className="sideselect-list">
                    {CHRYSLER.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //CITROEN
    if(formCar.brand == "Citroën"){
        return(
            <>
                <div className="sideselect-list">
                    {CITROEN.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //DFSK
    if(formCar.brand == "Dfsk"){
        return(
            <>
                <div className="sideselect-list">
                    {DFSK.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //DODGE
    if(formCar.brand == "Dodge"){
        return(
            <>
                <div className="sideselect-list">
                    {DODGE.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //DS
    if(formCar.brand == "Ds"){
        return(
            <>
                <div className="sideselect-list">
                    {DS.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //FIAT
    if(formCar.brand == "Fiat"){
        return(
            <>
                <div className="sideselect-list">
                    {FIAT.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //FIAT
    if(formCar.brand == "Ford"){
        return(
            <>
                <div className="sideselect-list">
                    {FORD.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //HAVAL
    if(formCar.brand == "Haval"){
        return(
            <>
                <div className="sideselect-list">
                    {HAVAL.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //HONDA
    if(formCar.brand == "Honda"){
        return(
            <>
                <div className="sideselect-list">
                    {HONDA.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //HYUNDAI
    if(formCar.brand == "Hyundai"){
        return(
            <>
                <div className="sideselect-list">
                    {HYUNDAI.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //JAC
    if(formCar.brand == "Jac"){
        return(
            <>
                <div className="sideselect-list">
                    {JAC.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //JEEP
    if(formCar.brand == "Jeep"){
        return(
            <>
                <div className="sideselect-list">
                    {JEEP.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //KIA
    if(formCar.brand == "Kia"){
        return(
            <>
                <div className="sideselect-list">
                    {KIA.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //KYC
    if(formCar.brand == "Kyc"){
        return(
            <>
                <div className="sideselect-list">
                    {KYC.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //LAND ROVER
    if(formCar.brand == "Land Rover"){
        return(
            <>
                <div className="sideselect-list">
                    {LAND_ROVER.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //LEXUS
    if(formCar.brand == "Lexus"){
        return(
            <>
                <div className="sideselect-list">
                    {LEXUS.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //LIFAN
    if(formCar.brand == "Lifan"){
        return(
            <>
                <div className="sideselect-list">
                    {LIFAN.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //MASERATI
    if(formCar.brand == "Maserati"){
        return(
            <>
                <div className="sideselect-list">
                    {MASERATI.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //MERCEDES BENZ
    if(formCar.brand == "Mercedes Benz"){
        return(
            <>
                <div className="sideselect-list">
                    {MERCEDES_BENZ.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //MINI
    if(formCar.brand == "Mini"){
        return(
            <>
                <div className="sideselect-list">
                    {MINI.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //MITSUBISHI
    if(formCar.brand == "Mitsubishi"){
        return(
            <>
                <div className="sideselect-list">
                    {MITSUBISHI.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //NISSAN
    if(formCar.brand == "Nissan"){
        return(
            <>
                <div className="sideselect-list">
                    {NISSAN.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //PEUGEOT
    if(formCar.brand == "Peugeot"){
        return(
            <>
                <div className="sideselect-list">
                    {PEUGEOT.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //PORSCHE
    if(formCar.brand == "Porsche"){
        return(
            <>
                <div className="sideselect-list">
                    {PORSCHE.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //RAM
    if(formCar.brand == "Ram"){
        return(
            <>
                <div className="sideselect-list">
                    {RAM.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //RENAULT
    if(formCar.brand == "Renault"){
        return(
            <>
                <div className="sideselect-list">
                    {RENAULT.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //SHINERAY
    if(formCar.brand == "Shineray"){
        return(
            <>
                <div className="sideselect-list">
                    {SHINERAY.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //SMART
    if(formCar.brand == "Smart"){
        return(
            <>
                <div className="sideselect-list">
                    {SMART.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //SUBARU
    if(formCar.brand == "Subaru"){
        return(
            <>
                <div className="sideselect-list">
                    {SUBARU.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //SUZUKI
    if(formCar.brand == "Suzuki"){
        return(
            <>
                <div className="sideselect-list">
                    {SUZUKI.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //TOYOTA
    if(formCar.brand == "Toyota"){
        return(
            <>
                <div className="sideselect-list">
                    {TOYOTA.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //VOLKSWAGEN
    if(formCar.brand == "Volkswagen"){
        return(
            <>
                <div className="sideselect-list">
                    {VOLKSWAGEN.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

    //VOLVO
    if(formCar.brand == "Volvo"){
        return(
            <>
                <div className="sideselect-list">
                    {VOLVO.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation(MODEL_ROUTE_REDIRECTION, {
                                state:{
                                    year : formCar.year,
                                    brand: formCar.brand,
                                    model: model.label
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

}

export default ModelList;