import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatingStars from './RatingStars'; 
import '../style/home.scss';


const ArtisanCards = ({ artisan }) => {
  const navigate = useNavigate();
  const voirDetail = () => navigate(`/artisans/${artisan.id}`);

  return (
    <div className="card">
    <header className="card-header">
    <h5 className="card-title">{artisan.name}</h5>
    </header>
      <div className="card-body">
        <p className="card-text">Note  
          <span className="stars-yellow">
        <RatingStars note={parseFloat(artisan.note)} />
          </span>
        </p>
        <p className="card-text">Spécialité : {artisan.specialty}</p>
        <p className="card-text">Ville : {artisan.location}</p>
      
        <button onClick={voirDetail} className="btn btn-primary-custom">voir détail</button>
      </div>
    </div>
  );
};

export default ArtisanCards;
