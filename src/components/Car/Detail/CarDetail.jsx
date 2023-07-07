import { useNavigate, useLocation } from 'react-router-dom';
import { useState} from 'react';
import { Row, Col } from "react-bootstrap";
import "./CarDetail.css"

const DATA = {id: 1, title: "Bmw", image: "/images/newCars/bmw.jpg", description: "Casi sin uso, cuidado y con chapa perfecta, motor solo con 1 año de uso, bateria y llantas nuevas."};
const DATA2 = [
    { title: "Te damos 3 meses de cobertura mecanica", description: "Y podes extenderla hasta 12 meses", image: "/images/tres.jpg" },
    { title: "Certificamos todos nuestros autos", description: "Inpesccionamos nuestros autos para asegurar la calidad", image: "/images/uno.jpg" },
    { title: "Financia a tu medida", description: "Trabajamos con las mejores opciones", image: "/images/dos.jpg" }
];

function CarDetail() {
    
    debugger
    const location = useLocation();
    const carDetail = location.state    
    const navigation = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div className="cardetail-container">
            <Row className="aligh-items-center">
              <Col xs={12} md={12} xl={12}>
                <div className="cardetail-img">
                    {/* <img src={aboutPhoto} alt="aboutImg"></img> */}
                    <img src='/images/newCars/bmw.jpg' alt='' />
                </div>
              </Col>
            </Row>
            <Row className="aligh-items-center">
              <Col xs={12} md={12} xl={12}>
                <div className="cardetail-desc">
                    <div className="cardetail-title">
                        <h1>{carDetail.marca.brand}</h1>
                        <h2>{carDetail.modelo.model}</h2>
                    </div>
                    <hr id="carDetailHr"/>
                    <div className="cardetail-profesion">
                        <h3>Precio: {carDetail.precio.price}</h3>
                    </div>
                    <hr id="carDetailHr"/>
                    <input id="buttonBuy" type="submit" value="Comprar" onClick={() => navigation("/contact", {
                                state:{
                                    buyCarDetail : carDetail
                                            }
                                        })
                                        }/>
                {/* <p>Hola! Mi nombre es Evelyn Denise, tengo 26 años y me formé como fotógrafa en ISEC, instituto que me brindo las primeras herramientas para adentrarme en el mundo de la comunicación visual. 
                    A lo largo de los años experimente diversas ramas de la fotografía, entre ellas: gastronomía, producto, moda, documental y social. Conocer cada una de ellas me ha llevado a enamorarme principalmente de la fotografía publicitaria, por lo cual continue capacitandome como fotógrafa de producto y gastronomía aprendiendo de grandes referentes de la industria. 
                    En lo profesional soy muy detallista, busco resultados de calidad y me apasiona la excelencia. Disfruto de comprometerme y sacar el máximo potencial a cada proyecto.
                    Los invito a ver mi portfolio, donde podrán encontrar variedad de trabajos y notar cómo me desenvuelvo en cada área.
                </p> */}
                </div>
              </Col>
            </Row>
        </div>
      )
}

export default CarDetail;