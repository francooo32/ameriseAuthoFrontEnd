import React, {useState, useEffect} from 'react'
import { Row, Col } from "react-bootstrap";

const BuyCarPageCarousel = ({props}) => {
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const textos = ['Nuestro equipo capacitado está aquí para ayudarte a encontrar el'  + "\n"
               + ' vehículo perfecto que se ajuste a tus necesidades. Confía en nuestra' +  
                'trayectoria y descubre la calidad y el servicio que nos distinguen.', 
                'Nuestra visión es ser líderes en el mercado de autos usados,' + 
                'reconocidos por nuestra excelencia y confianza en cada transacción.' + 
                '¡Ven y descubre tu auto soñado con Vittoria!']
    // const textos = ['Nuestro equipo capacitado está aquí para ayudarte a encontrar el vehículo' +
    //             'perfecto que se ajuste a tus necesidades. Confía en nuestra trayectoria y' + 
    //             'descubre la calidad y el servicio que nos distinguen.']
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedText, setSelectedText] = useState(textos[0]);

  useEffect(() => {
    let ticker = setInterval(() => {
      setTimeout(() => {
        next();
      }, 4000);
    }, delta);

    return () => { clearInterval(ticker) };
  }, [])

  const selectNewImage = (index, textos, next = true) => {
    const condition = next ?  selectedIndex < textos.length - 1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0)
                              : condition ? selectedIndex -1 : textos.length -1;
    setSelectedText(textos[nextIndex]);
    setSelectedIndex(nextIndex);
  }  

  const previous = () => {
    selectNewImage(selectedIndex, textos, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, textos);
  }

  return (
                    <div className="listOffer">
                        <h4 className="offer">{selectedText}</h4>
                    </div>  
            
  )
}

export default BuyCarPageCarousel