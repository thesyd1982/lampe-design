import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin , FaHome,FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import "./footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="socials">
        <div className="description">
          Retrouvez nous sur les reseaux
        </div>
        <div className="social">
        <a className="icon"><FaFacebookF /></a>
        <a className="icon"><FaTwitter /></a>
        <a className="icon"><FaInstagram /></a>
        <a className="icon"><FaLinkedin /></a>
        </div>
        </div>
      </div>
      <div className="footer__body">
        <section className="col col--col1">
          <h3 className="col--header">DARIZEENNA</h3>
          <p>Lorem ipsum dolor
            sit amet consectetur 
            adipisicing elit.
            Ad neque in labore? Odio,
            ullam repudiandae iure dolor obcaecati
            ipsa dignissimos!
          </p>
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
         <a className="location"> <p><FaHome /> New York, NY 10012, US</p></a>
          <a className="mail"><p><FaEnvelope/> info@example.com</p></a>
        <a className="phone"><p><FaPhoneAlt/> + 01 234 567 88</p></a>
          
</section>
      </div>
      <div className="footer__footer"><div className="copy-right">{`Copyright © ${new Date().getFullYear()} all rigths reserved to darizeena.tk`}</div></div>
    </div>
  )
}

export default Footer