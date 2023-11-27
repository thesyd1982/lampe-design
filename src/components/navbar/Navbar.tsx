import { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.scss'
import { Logo } from '../../components/';



type link = {
    id:string,
    text: string,
    href?: string,
}

interface NavbarProps {
    links: link[]
}

function Navbar(props: NavbarProps) {
    const { links } = props
    const [displayMenu, setDisplayMenu] = useState(false)
    const [hide, setHide] = useState(false)
    const [sticky, setSticky] = useState(false)
    const [activeLink, setActiveLink]=useState('header')

    const displayMenuHandler = () => {
        setDisplayMenu(!displayMenu);
    };
    const handleScroll = () => {
    const activeSection = document.querySelector('.section.active')
        setSticky(activeSection?.id !== 'header')
        setActiveLink(activeSection?.id || 'header' )
        setHide(activeSection?.id=='footer')
       if(window.location.hash) {
             window.history.replaceState("", document.title, window.location.pathname);
         }

    }
    document.addEventListener('DOMContentLoaded', handleScroll)
    document.body.addEventListener('scroll',handleScroll)
    document.getElementById('logo')?.addEventListener('onclick', () => console.log(window.location.href))
    return (
        <nav className={`navbar navbar--${ sticky ? "small": "large"} ${hide? "hidden" : ""}`} id="navbar">

            <div className="navbar__logo" id='logo'>
                <Logo cls='navbar__logo' />
            </div>

            <ul className={`navbar__links navbar__links--${ sticky ? "small": "large"}`} >

                {
                    links.map((link, i) => {
                        return (<li className={`navbar__item`}  key={`${i}`}>
                            <Link to={`${link.href}`}
                                className={`navbar__link navbar__link--${ sticky ? "small": "large"} ${ activeLink == link.id ? "active": ""}`}>
                                {`${link.text}`}
                            </Link>
                        </li>)
                    }
                    )
                }
            </ul>
            <button className="navbar__burger" onClick={displayMenuHandler}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}

export default Navbar
