import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatingStars from './RatingStars'; 
import '../style/home.scss';


const ArtisanCards = ({ artisan }) => {
  const navigate = useNavigate();
  const voirDetail = () => navigate(`/artisans/${artisan.id}`);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{artisan.name}</h5>
        <p className="card-text">Note: <RatingStars note={parseFloat(artisan.note)} className="stars-yellow"  /></p> 
        <p className="card-text">Spécialité : {artisan.specialty}</p>
        <p className="card-text">Emplacement : {artisan.location}</p>
      
        <button onClick={voirDetail} className="btn btn-primary-custom">voir</button>
      </div>
    </div>
  );
};

export default ArtisanCards;