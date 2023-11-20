import React, { useState } from 'react'
import './navbar.scss'
function Navbar() {
    const [displayMenu, setDisplayMenu] = useState(false);

    const displayMenuHandler = () => {
        setDisplayMenu(!displayMenu);
    };
  return (
    <nav className={ `navbar ${displayMenu?'show-nav':'hidden'}`}>
        <div className="navbar__logo"><a href="" className="navbar__link">DARIZEENNA</a></div>
        <ul className={`navbar__links `} >
            <li className="navbar__item">
                <a href="" className="navbar__link">Accueil</a>
            </li>
            <li className="navbar__item">
                <a href="" className="navbar__link">Produits</a>
            </li>
            <li className="navbar__item">
                <a href="" className="navbar__link">Services</a>
            </li>
            <li className="navbar__item">
                <a href="" className="navbar__link">A propos</a>
            </li>
            <li className="navbar__item">
                <a href="" className="navbar__link">Contact</a>
            </li>
        </ul>
        <button className="navbar__burger" onClick={displayMenuHandler}>
            <span className="burger-bar"></span>
        </button>
    </nav>
  )
}

export default Navbar