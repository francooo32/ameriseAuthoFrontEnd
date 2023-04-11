import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./selects.css"

var km = 0;

function KmsList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    function handleChange(event) {
        console.log("Working:", event.target.value);
        km = event.target.value
    }

    return (
        <>
            <div className="sideselect-list">
                <form action="">
                    <input type="number" name="km" onChange={handleChange} max="1000000"/>
                    <input id="button" type="submit" value="Siguiente" onClick={() => navigation("/contact", {
                        state: {
                            year : formCar.year,
                            brand: formCar.brand,
                            model: formCar.model,
                            color: formCar.model,
                            km: km
                            }
                        })
                        } 
                    />
                </form>
            </div>


        </>
    );
}

export default KmsList;