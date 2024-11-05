import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-menu">
          <h3>Trouve ton artisan!</h3>
          <h6>Avec la région <br/> Auvergne-Rhône-Alpes</h6>
        </section>
        <section className="footer-contact">
          <h5>Lyon</h5>
          <address>
            101 cours Charlemagne<br/>
            CS 20033<br/>
            69269 LYON CEDEX 02<br/>
            France<br/>
            <span className="phone-container">
              <img src="phone.png" alt="Icône de téléphone" className="phone-icon" />
              <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
            </span>
          </address>
        </section>
        <div class="separator"></div> 
        <nav>
          <ul>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
            <li><Link to="/accessibilite">Accessibilité</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;