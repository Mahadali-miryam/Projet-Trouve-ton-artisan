import React from "react";
import ArtisanCards from "./ArtisanCards";
import '../style/home.scss';

const ArtisansDuMois = ({ artisans }) => {
  return (
  
<div>
  <h2>Les Artisans du Mois</h2> 
    <div className="container">
      {artisans.map((artisan) => (
        <ArtisanCards key={artisan.id} artisan={artisan} />
        ))}
      </div> 
    </div>
  );
};

export default ArtisansDuMois;
