import React from "react";
import ArtisanCards from "./ArtisanCards";
import '../style/home.scss';
import artisansData from "../artisans.json";

const ArtisansDuMois = ({ artisans }) => {
   // Filtre les artisans et garde que ceux avec top=true
  const artisansFiltres = artisansData.filter(artisan => artisan.top === true);

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
