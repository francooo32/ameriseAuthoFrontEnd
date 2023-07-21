import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage"
import BuyCarPage from './pages/BuyCar/BuyCarPage';
import AboutUs from './components/aboutus/aboutus.jsx'
import NavBar from './components/navBar/navBar.jsx';
import CarDetail from './components/Car/Detail/CarDetail';
import SellCar from './pages/sellcar/sellcar.jsx';
import BrandSelect from './components/sellsteps/brandselect/brandselect.jsx';
import ModelSelect from './components/sellsteps/modelselect/modelselect.jsx';
import VersionSelect from './components/sellsteps/versionselect/versionselect.jsx';
import FuelSelect from './components/sellsteps/fuelselect/fuelselect.jsx';
import DoorSelect from './components/sellsteps/doorselect/doorselect.jsx';
import TransmissionSelect from './components/sellsteps/transmissionselect/transmissionselect.jsx';
import EngineSelect from './components/sellsteps/engineselect/engineselect.jsx';
import BodySelect from './components/sellsteps/bodyselect/bodyselect.jsx';
import ColorSelect from './components/sellsteps/colorselect/colorselect.jsx';
import KmSelect from './components/sellsteps/kmselect/kmselect.jsx';
import ErrorSelect from './components/sellsteps/finalizationselect/errorselect.jsx';
import CongratzSelect from './components/sellsteps/finalizationselect/congratzselect.jsx';
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
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/comprar" element={<BuyCarPage />} />
          <Route path="/detalle" element={<CarDetail />} />
          <Route path="/vender" element={<SellCar />} />
          <Route path="/brandselect" element={<BrandSelect />} />
          <Route path="/modelselect" element={<ModelSelect />} />
          <Route path="/versionselect" element={<VersionSelect />} />
          <Route path="/fuelselect" element={<FuelSelect />} />
          <Route path="/doorselect" element={<DoorSelect />} />
          <Route path="/transmissionselect" element={<TransmissionSelect />} />
          <Route path="/engineselect" element={<EngineSelect />} />
          <Route path="/bodyselect" element={<BodySelect />} />
          <Route path="/colorselect" element={<ColorSelect />} />
          <Route path="/kmselect" element={<KmSelect />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/errorselect" element={<ErrorSelect />} />
          <Route path="/congratzselect" element={<CongratzSelect />} />
        </Routes>
        
        
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
