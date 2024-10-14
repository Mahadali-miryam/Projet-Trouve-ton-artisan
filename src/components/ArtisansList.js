import React from "react";
import { useLocation } from "react-router-dom"; 
import ArtisanCards from "./ArtisanCards";
import artisansData from '../artisans.json'; 

const ArtisanList = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("query");

  // Filtre les artisans en fonction du terme de recherche
  const filteredArtisans = searchTerm ? artisansData.filter(artisan =>
    artisan.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : artisansData; // Ajoute une condition pour gérer un searchTerm vide

  return (
    <div className="artisan-list d-flex flex-wrap justify-content-around">
      {filteredArtisans.map((artisan) => (
        <ArtisanCards key={artisan.id} artisan={artisan} />
      ))}
    </div>
  );
};

export default ArtisanList;