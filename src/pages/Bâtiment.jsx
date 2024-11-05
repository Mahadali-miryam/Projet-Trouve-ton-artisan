import React, { useState, useEffect } from 'react';
import ArtisanCards from '../components/ArtisanCards';
import '../style/bâtiment.scss';
import '../style/home.scss';

// Composant Bâtiment pour afficher une liste filtrée d'artisans dans la catégorie bâtiment
const Bâtiment = () => {
  const [filteredArtisans, setFilteredArtisans] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
// Charger les artisans depuis un fichier JSON
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/artisans.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de chargement des artisans');
        }
        return response.json();
      })
      .then(data => {
        const batimentArtisans = data.filter(artisan =>
          artisan.category.toLowerCase().includes('bâtiment')
        );
        setFilteredArtisans(batimentArtisans);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Erreur de chargement des artisans:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="artisan-list d-flex flex-wrap justify-content-around">
      {isLoading ? (
        <p>Chargement des artisans...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : filteredArtisans.length === 0 ? (
        <p>Aucun artisan trouvé.</p>
      ) : (
        filteredArtisans.map((artisan) => (
          <ArtisanCards key={artisan.id} artisan={artisan} />
        ))
      )}
    </section>
  );
};

export default Bâtiment;