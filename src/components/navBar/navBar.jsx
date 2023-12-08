import React, { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import logoNav from "../../public/Logos/2Logo.png"
import "./navBar.css"

const NavBar = ({isScrolling}) => {
  const navRef = useRef(null);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const returnToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <><nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`} ref={navRef}>
      <div className="navbar-logo" onClick={(returnToTop)}>

        <a className="navbar-logo" href="/" onClick={(returnToTop)}>
          <img id="logoNav" src={logoNav} alt="logoPh"></img>
        </a>

        <ul>
          <li>
            <a href="/comprar">Comprar</a>
          </li>
          <li>
            <a href="/vender">Vender</a>
          </li>
          <li>
            <a href="/zerokm">0Km</a>
          </li>
          <li>
            <a href="/nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/contactUs">Contacto</a>
          </li>
          {/* <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button> */}
        </ul>

      </div>

    </nav><button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button></>
    
  );
}

export default NavBar