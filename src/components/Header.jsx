import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/header.scss';

const Header =() => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirige vers une route de recherche, en passant le terme de recherche comme paramètre
    navigate(`/search?query=${searchTerm}`);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="search-form" role="search"onSubmit={handleSubmit}>
            <input className="form-control search" 
            type="search" 
            placeholder="Recherche" 
            aria-label="Recherche"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" type="submit">
              <img src="search.png" alt="icon de recherche"className="search-icon" />
            </button>
        </form>
        <div className="container-fluid"> 
          <NavLink className="navbar-brand" to="/">   
            <img src="Logo.png" alt="Logo Trouve ton artisan"/>
          </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/Home" activeClassName="active">Accueil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Batiment" activeClassName="active">Batiment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services" activeClassName="active">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Fabrication" activeClassName="active">Fabrication</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Alimentation" activeClassName="active">Alimentation</NavLink>
              </li>
            </ul>
          </div>  
        </div>
      </nav>
    </header>
  );
}

export default Header;
