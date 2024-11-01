import React, { useState, useEffect } from "react";
import ArtisanCards from "./ArtisanCards";
import '../style/home.scss';

const ArtisansDuMois = () => {
  const [artisansFiltres, setArtisansFiltres] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/artisans.json`)
      .then(response => response.json())
      .then(data => {
        const filteredArtisans = data.filter(artisan => artisan.top === true);
        setArtisansFiltres(filteredArtisans);
      })
      .catch(error => console.error("Erreur de chargement des artisans:", error));
  }, []);

  return ( 
    <section>
      <h2>Les Artisans du Mois</h2> 
      <div className="container-card">
        {artisansFiltres.map((artisan) => (
          <ArtisanCards key={artisan.id} artisan={artisan} />
        ))}
      </div> 
    </section>
  );
};

export default ArtisansDuMois;