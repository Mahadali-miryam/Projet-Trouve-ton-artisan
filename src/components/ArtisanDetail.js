import React from "react";
import { useParams } from "react-router-dom";
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
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{artisan.name}</h2>
          <p className="card-text">Note: <RatingStars note={parseFloat(artisan.note)} className="stars-yellow" /></p>
          <p className="card-text">Spécialité: {artisan.specialty}</p>
          <p className="card-text">Localisation: {artisan.location}</p>
          <p className="card-text">A propos : {artisan.about}</p>
          <p className="card-text">E-mail : {artisan.email}</p>
          <p className="card-text">Site web : {artisan.website}</p>
          <p className="card-text">Catégorie : {artisan.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDetail;