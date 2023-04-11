import { useNavigate, useLocation } from 'react-router-dom';
import "./selects.css"

const COLORS = [
    {id: 1, label: "Blanco", variable: 'white'},
    {id: 2, label: "Negro", variable: 'black'},
    {id: 3, label: "Gris", variable: 'grey'},
    {id: 4, label: "Plateado", variable: 'silver'},
    {id: 5, label: "Azul", variable: 'blue'},
    {id: 6, label: "Rojo", variable: 'red'},
    {id: 7, label: "Marron", variable: 'brown'},
    {id: 8, label: "Naranja", variable: 'orange'},
    {id: 9, label: "Beige", variable: 'beige'},
    {id: 10, label: "Violeta", variable: 'purple'},
    {id: 11, label: "Dorado", variable: 'gold'},
    {id: 12, label: "Amarillo", variable: 'yellow'},
    {id: 13, label: "Verde", variable: 'green'},
    {id: 14, label: "Otros", variable: 'white'}
]

function ColorList() {
    const location = useLocation();
    const formCar = location.state
    const navigation = useNavigate();

    return(
        <>
            <div className="sideselect-list-colors">
                {COLORS.map(color => 
                        <ul>
                                <li>
                                <div style={{background: color.variable, borderRadius: '50%', width: '30px',
                                    height: '30px', borderColor: 'black'}}> 
                                </div>
                                <input id="button" type="submit" value={color.label} onClick={() => navigation("/kmselect", {
                            state:{
                                year : formCar.year,
                                brand: formCar.brand,
                                model: formCar.model,
                                color: color.label
                                        }
                                    })
                                    }/>
                            </li>
                        </ul>
                    )}

            </div>

            
        </>
    );
}

export default ColorList;