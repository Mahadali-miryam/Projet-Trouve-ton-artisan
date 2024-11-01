import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RatingStars from './RatingStars';
import '../style/home.scss';

const ArtisanDetail = () => {
  const [artisan, setArtisan] = useState(null);
  const { artisanId } = useParams();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/artisans.json`)
      .then(response => response.json())
      .then(data => {
        const foundArtisan = data.find(artisan => artisan.id.toString() === artisanId);
        setArtisan(foundArtisan);
        console.log("Artisan trouvé :", foundArtisan);
      })
      .catch(error => console.error("Erreur de chargement des artisans:", error));
  }, [artisanId]);

  if (!artisan) {
    return <div>Artisan non trouvé</div>;
  }

  return (
    <article className="container">
      <div className="card">
        <header className="card-header">
          <h2 className="card-title">{artisan.name}</h2>
        </header>
        <div className="card-body">
          <div className="card-text">
            Note: <RatingStars note={parseFloat(artisan.note) || 0} className="stars-yellow" />
          </div>
          <p className="card-text">Spécialité: {artisan.specialty}</p>
          <p className="card-text">Ville: {artisan.location}</p>
          <p className="card-text">À propos : {artisan.about}</p>
          <p className="card-text">
            E-mail :<Link to={`/contact/${artisan.email}`} rel="noopener noreferrer"> Contacter cet artisan</Link>
          </p>
          <p className="card-text">
            Site web : <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a>
          </p>
          <p className="card-text">Catégorie : {artisan.category}</p>
        </div>
      </div>
    </article>
  );
};

export default ArtisanDetail;