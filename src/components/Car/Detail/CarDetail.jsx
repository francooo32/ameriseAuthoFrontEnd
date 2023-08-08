import { useNavigate, useLocation } from 'react-router-dom';
import { useState} from 'react';
import { Row, Col } from "react-bootstrap";
import "./CarDetail.css"

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
                    <img src={carDetail.img.img} alt='imgCompra' />
                </div>
              </Col>
            </Row>
            <Row className="aligh-items-center">
              <Col xs={12} md={12} xl={12}>
                <div className="cardetail-desc">
                    <div className="cardetail-title">
                        <h1>{carDetail.marca.brand}</h1>
                        <h2>{carDetail.modelo.model}</h2>
                        <h2>{carDetail.version.version}</h2>
                    </div>
                    <hr id="carDetailHr"/>
                    <div className="cardetail-profesion">
                        <h3>Precio: {carDetail.precio.price}</h3>
                    </div>
                    <hr id="carDetailHr"/>
                    <input id="buttonBuy" type="submit" value="Comprar" onClick={() => navigation("/contactbuy", {
                                state:{
                                    brand: carDetail.marca.brand,
                                    model: carDetail.modelo.model,
                                    version: carDetail.version.version,
                                    price: carDetail.precio.price
                                            }
                                        })
                                        }/>
                </div>
              </Col>
            </Row>
        </div>
      )
}

export default CarDetail;