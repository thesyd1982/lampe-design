import { Link } from "react-router-dom"
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin ,  FaEnvelope } from 'react-icons/fa6';
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import "./footer.scss"
import Section from "../section/Section";

function Footer() {
  return (
  <Section sectionId="footer">
    <div className="footer">
      <div className="footer__top">
        <div className="socials">
        <div className="description">
          Retrouvez nous sur les reseaux
        </div>
        <div className="social">
        <Link to="" className="icon"><FaFacebookF /></Link>
        <Link to="" className="icon"><FaXTwitter /></Link>
        <Link to="" className="icon"><FaInstagram /></Link>
        <Link to="" className="icon"><FaLinkedin /></Link>
        </div>
        </div>
      </div>
      <div className="footer__body">
        <section className="col col--col1">
          <h3 className="col--header">DARIZEENNA</h3>
          <p>Nous sommes une entreprise Algérienne spécialisée dans la conception et la fabrication de mobilier
          contemporain haut de gamme.</p>
          <p> Notre passion pour l'artisanat et le design se reflète dans chaque pièce que nous créons.</p>
          <p>Explorer notre gamme ou commander des pièces sur-mesure, adaptées à vos préférences et à votre espace.</p>
        </section>
        <section className="col col--col2">
          <h3 className="col--header">PRODUITS</h3>
          <p>Lorem ipsum dolor
            sit amet consectetur
            adipisicing elit.
            Ad neque in labore? Odio,
            ullam repudiandae iure dolor obcaecati
            ipsa dignissimos!
          </p>
          </section>
        <section className="col col--col3">
          <h3 className="col--header">SERVICES</h3>
          <ul>
            <li><MdDoubleArrow className="icon"/><Link to='/shipping' className="footer-link">{'Livraison en 48H'}</Link></li>
            <li><MdDoubleArrow className="icon"/><Link to='/shipping' className="footer-link">{'Vente au praticuliers'}</Link></li>
            <li><MdDoubleArrow className="icon"/><Link to='/shipping' className="footer-link">{'Vente au professionel'}</Link></li>
            <li><MdDoubleArrow className="icon"/><Link to='/shipping' className="footer-link">{'Personalisation de produits'}</Link></li>
          </ul>
          </section>
        <section className="col col--col4">
          <h3 className="col--header">CONTACT</h3>
        <ul>
         <li><Link to="/contact" className="location"><FaHome size={"1rem"} className="icon" />{'New York, NY 10012, US'}</Link></li>
         <li><Link to="mailto:ayad.mohamed.elhadi@gmail.com"  className="mail"><FaEnvelope size={"1rem"} className="icon"/>{'ayad.mohamed.elhadi@gmail.com'}</Link></li>
        <li><Link to="tel:+213 770 60 60 26" className="phone"><FaPhoneAlt  size={"1rem"} className="icon"/>{`+213 770 60 60 26`}</Link></li>
        </ul>
</section>
      </div>
      <div className="footer__footer"><div className="copy-right">{`Copyright © ${new Date().getFullYear()} all rigths reserved to darizeena.tk`}</div></div>
    </div>
    </Section>
  )
}

export default Footer
