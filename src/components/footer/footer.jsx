import { Container, Row, Col } from "react-bootstrap";
import logoPhoto from "../../public/Logos/2.png"
import navIcon1 from "../../public/footerImg/nav-icon1.svg";
import navIcon2 from "../../public/footerImg/nav-icon2.svg";
import navIcon3 from "../../public/footerImg/nav-icon3.svg";
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img id="footerImg" src={logoPhoto} alt="Logo" />
            <ul>
              <li>
                <a href="/comprar">Comprar</a>
              </li>
              <li>
                <a href="/vender">Vender</a>
              </li>
              <li>
                <a href="/nosotros">Nosotros</a>
              </li>
              <li>
                <a href="/contactUs">Contacto</a>
              </li>
            </ul>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/vittoria_automobili/"  target="_blank" ><img src={navIcon3} alt="Icon"/></a>
            </div>
            <div className="copyright">
              <p>Copyright 2023. All Rights Reserved</p>
            </div>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="copyright">
              <p className="version">Vr 1.0</p>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
