import { useNavigate, useLocation } from 'react-router-dom';
import { ALFAROMEO, AUDI, BAIC, BMW, CHANGAN, CHERY, CHEVROLET, CHRYSLER,
        CITROEN, DFSK, DODGE, DS, FIAT, FORD, HAVAL, HONDA, HYUNDAI, JAC,
        JEEP, KIA, KYC, LAND_ROVER, LIFAN, MASERATI, MERCEDES_BENZ, MINI,
        MITSUBISHI, NISSAN, PEUGEOT, PORSCHE, RAM, RENAULT, SHINERAY, SMART,
        SUBARU, SUZUKI, TOYOTA, VOLKSWAGEN, VOLVO } from '../vehiclemodels/modelslist.jsx';
import "./selects.css"


function ModelList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    //ALFA ROMEO
    if(formCar.brand == "Alfa Romeo"){
        return(
            <>
                <div className="sideselect-list">
                    {ALFAROMEO.map(model => 
                            <ul>
                                    <li>
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                                    <input id="button" type="submit" value={model.label} onClick={() => navigation("/colorselect", {
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
                </div>
            </>
        );
    }

}

export default ModelList;