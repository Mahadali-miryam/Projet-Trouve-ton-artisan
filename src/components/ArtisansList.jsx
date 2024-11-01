import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArtisanCards from "./ArtisanCards";

const ArtisanList = () => {
  const [filteredArtisans, setFilteredArtisans] = useState([]);
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const searchTerm = query.get("query");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/artisans.json`)
      .then(response => response.json())
      .then(data => {
        const filtered = searchTerm
          ? data.filter(artisan =>
              artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
              artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : data;
        setFilteredArtisans(filtered);
      })
      .catch(error => console.error("Erreur de chargement des artisans:", error));
  }, [searchTerm]);

  return (
    <section className="artisan-list d-flex flex-wrap justify-content-around">
      {filteredArtisans.map((artisan) => (
        <ArtisanCards key={artisan.id} artisan={artisan} />
      ))}
    </section>
  );
};

export default ArtisanList;