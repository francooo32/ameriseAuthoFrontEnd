import React from 'react'
import './cards.css'
import uno from "../../public/uno.jpg"
import dos from "../../public/dos.jpg"
import tres from "../../public/tres.jpg"

const Card = () => {

    return (
        <>
            <div className='card-container-title'>
                <h1>¿Por qué elegirnos?</h1>
            </div>
            <div className="card-container">
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <img src={tres} alt="tres" />
                            <div className='card-body'>
                                <h4 className='card-title'>The title</h4>
                                <p className='card-text'>Holi esto es un parrafo cualquiera</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card'>
                            <img src={dos} alt="tres" />
                            <div className='card-body'>
                                <h4 className='card-title'>The title</h4>
                                <p className='card-text'>Holi esto es un parrafo cualquiera</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card'>
                            <img src={uno} alt="tres" />
                            <div className='card-body'>
                                <h4 className='card-title'>The title</h4>
                                <p className='card-text'>Holi esto es un parrafo cualquiera</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>   
        </>

    )

}

export default Card
