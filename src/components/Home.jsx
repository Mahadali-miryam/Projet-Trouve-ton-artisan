import React, { useState, useEffect } from 'react';
import '../style/home.scss';
import '../style/artisancards.scss';
import ArtisansDuMois from './ArtisansDuMois';


const Home = () => {
  const [artisans, setArtisans] = useState([]);
  
  useEffect(() => {
    // Charge les données depuis le dossier public
    fetch(`${process.env.PUBLIC_URL}/artisans.json`)
      .then(response => response.json())
      .then(data => setArtisans(data))
      .catch(error => console.error("Erreur de chargement des artisans:", error));
  }, []);

  const topArtisans = artisans.slice(0, 3);

  return (
    <div>
      <header>
      <h1>Bienvenue sur Trouve ton Artisan</h1>
      </header>
      <main>
      <section className="comment-trouver">
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </section>
      <section className="container-card">
      <ArtisansDuMois artisans={topArtisans} />
      </section>
    </main>
    </div>
  );
};

export default Home;