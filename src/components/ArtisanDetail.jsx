import React from "react";
import { useParams, Link  } from "react-router-dom";
import RatingStars from './RatingStars';
import artisansData from "../artisans.json";
import '../style/home.scss';


const ArtisanDetail = () => {
  let { artisanId } = useParams();
  const artisan = artisansData.find(artisan => artisan.id.toString() === artisanId);

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
          <p className="card-text">Note: <RatingStars note={parseFloat(artisan.note)} className="stars-yellow" /></p>
          <p className="card-text">Spécialité: {artisan.specialty}</p>
          <p className="card-text">Ville: {artisan.location}</p>
          <p className="card-text">A propos : {artisan.about}</p>
          <p className="card-text">E-mail :<Link to={`/contact/${artisan.email}`} rel="noopener noreferrer"> Contacter cette artisan</Link></p>
          <p className="card-text">Site web : <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a></p>
          <p className="card-text">Catégorie : {artisan.category}</p>
        </div>
      </div>
    </article>
  );
};

export default ArtisanDetail;