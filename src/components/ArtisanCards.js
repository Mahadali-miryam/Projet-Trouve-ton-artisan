import React from 'react';
import { Rating } from 'react-simple-star-rating';
import '../style/home.scss';

const ArtisanCards = ({ artisan }) => {
  const noteNumerique = artisan.note ? parseFloat(artisan.note) : 0;
  const noteArrondie = Math.round(noteNumerique * 20);

  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{artisan.name}</h5>
        <p className="card-text">Note: 
          <Rating 
            className="stars-yellow"
            ratingValue={noteArrondie} 
            readonly={true} 
            allowHalfIcon={true} // demi-étoiles
          /> 
          ({artisan.note})
        </p>
        <p className="card-text">Spécialité : {artisan.specialty}</p>
        <p className="card-text">Localisation : {artisan.location}</p>
        <button className="btn btn-primary-custom">voir</button>
      </div>
    </div>
  );
};

export default ArtisanCards;