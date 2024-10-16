import React, { useState, useEffect } from 'react';
import '../style/home.scss';
import '../style/artisancards.scss';
import ArtisansDuMois from './ArtisansDuMois';
import artisansData from '../artisans.json'; 


const Home = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    // Simule le chargement des données
    setArtisans(artisansData);
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
      <section className="container-cards">
      <ArtisansDuMois artisans={topArtisans} />
      </section>
    </main>
    </div>
  );
};

export default Home;