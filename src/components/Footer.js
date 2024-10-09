import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-menu">
          <h3>Trouve ton artisan!</h3>
          <h6>Avec la région <br/> Auvergne-Rhône-Alpes</h6>
        </div>
        <div className="footer-contact">
          <h5>Lyon</h5>
          <address>
            101 cours Charlemagne<br/>
            CS 20033<br/>
            69269 LYON CEDEX 02<br/>
            France<br/>
            <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
          </address>
        </div>
        <div class="separator"></div> 
        <div>
          <ul>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
            <li><Link to="/accessibilite">Accessibilité</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;