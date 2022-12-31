import './App.css';
import LandingPage from "./pages/Landing/LandingPage"
import { createTheme, colors, ThemeProvider } from '@mui/material';
import BuyCarPage from './pages/BuyCar/BuyCarPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainToolbar from './components/Ui/MainToolbar';
import CarDetail from './components/Car/Detail/CarDetail';
import SellCar from './pages/sellcar/sellcar.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: colors.lightBlue[500]
    }
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainToolbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/comprar" element={<BuyCarPage />} />
          <Route path="/detalle" element={<CarDetail />} />
          <Route path="/vender" element={<SellCar />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
