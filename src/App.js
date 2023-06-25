import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import LandingPage from "./pages/Landing/LandingPage"
import BuyCarPage from './pages/BuyCar/BuyCarPage';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import NavBar from './components/navBar/navBar.jsx';
import CarDetail from './components/Car/Detail/CarDetail';
import SellCar from './pages/sellcar/sellcar.jsx';
import BrandSelect from './components/sellsteps/brandselect/brandselect.jsx';
import ModelSelect from './components/sellsteps/modelselect/modelselect.jsx';
import ColorSelect from './components/sellsteps/colorselect/colorselect.jsx';
import KmSelect from './components/sellsteps/kmselect/kmselect.jsx';
import ContactForm from './components/contactform/contactform.jsx';

function App() {

  const [scrollHeight, setScrolHeight] = useState(0) 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position); 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        {/* <MainToolbar /> */}
        <NavBar isScrolling={scrollHeight}/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/comprar" element={<BuyCarPage />} />
          <Route path="/detalle" element={<CarDetail />} />
          <Route path="/vender" element={<SellCar />} />
          <Route path="/brandselect" element={<BrandSelect />} />
          <Route path="/modelselect" element={<ModelSelect />} />
          <Route path="/colorselect" element={<ColorSelect />} />
          <Route path="/kmselect" element={<KmSelect />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        
        
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
