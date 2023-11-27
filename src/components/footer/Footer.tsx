import { Link } from "react-router-dom"
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin ,  FaEnvelope } from 'react-icons/fa6';
import { FaHome, FaPhoneAlt } from "react-icons/fa";
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
          <p>Lorem ipsum dolor
            sit amet consectetur
            adipisicing elit.
            Ad neque in labore? Odio,
            ullam repudiandae iure dolor obcaecati
            ipsa dignissimos!
          </p>
          </section>
        <section className="col col--col4">
          <h3 className="col--header">CONTACT</h3>
         <Link to="/contact" className="location"> <p><FaHome /> New York, NY 10012, US</p></Link>
          <Link to="mailto:ayad.mohamed.elhadi@gmail.com" className="mail"><p><FaEnvelope/>ayad.mohamed.elhadi@gmail.com</p></Link>
        <Link to="tel:+213 770 60 60 26" className="phone"><p><FaPhoneAlt/> +213 770 60 60 26</p></Link>

</section>
      </div>
      <div className="footer__footer"><div className="copy-right">{`Copyright © ${new Date().getFullYear()} all rigths reserved to darizeena.tk`}</div></div>
    </div>
    </Section>
  )
}

export default Footer
