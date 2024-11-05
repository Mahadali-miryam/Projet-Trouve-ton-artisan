import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArtisanCards from "./ArtisanCards";

// Composant pour afficher une liste d'artisans basée sur une recherche
const ArtisanList = () => {
  const [filteredArtisans, setFilteredArtisans] = useState([]);
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement
 
// Hook pour récupérer les paramètres de recherche de l'URL
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const searchTerm = query.get("query");

// Charger et filtre les artisans basés sur le terme de recherche
  useEffect(() => {
    setIsLoading(true); 
    fetch(`${process.env.PUBLIC_URL}/artisans.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de chargement des artisans');
        }
        return response.json();
      })
      .then(data => {
        const filtered = searchTerm
          ? data.filter(artisan =>
              artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
              artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : data;
        setFilteredArtisans(filtered);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error("Erreur de chargement des artisans:", error);
        setError(error.message); 
        setIsLoading(false); 
      });
  }, [searchTerm]);

  return (
    <section className="artisan-list d-flex flex-wrap justify-content-around">
      {isLoading ? ( // Afficher un message de chargement
        <p>Chargement des artisans...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : filteredArtisans.length === 0 ? ( // Vérifie si aucun artisan n'est trouvé
        <p>Aucun artisan trouvé.</p>
      ) : (
        filteredArtisans.map((artisan) => (
          <ArtisanCards key={artisan.id} artisan={artisan} />
        ))
      )}
    </section>
  );
};
export default ArtisanList;