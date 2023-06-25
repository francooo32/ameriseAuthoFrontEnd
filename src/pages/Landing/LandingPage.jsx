import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import Cover from "../../components/cover/cover.jsx"
import SellSection from "../../components/sellsection/sellsection.jsx"
import Footer from '../../components/footer/footer.jsx';

const DATA = [
    { title: "Te damos 3 meses de cobertura mecanica", description: "Y podes extenderla hasta 12 meses", image: "/images/tres.jpg" },
    { title: "Certificamos todos nuestros autos", description: "Inpesccionamos nuestros autos para asegurar la calidad", image: "/images/uno.jpg" },
    { title: "Financia a tu medida", description: "Trabajamos con las mejores opciones", image: "/images/dos.jpg" }
];

function LandingPage() {
    const navigate = useNavigate();

    return(
        <>      
                <Cover/>
                <SellSection/>
                <Footer/>
        </>
    );
}

export default LandingPage;