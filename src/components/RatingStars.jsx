import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingStars = ({ note, className }) => {

  // Formatage de la note pour l'affichage
  const formattedNote = `${note}/5`;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StarRatings
        rating={parseFloat(note)}
        starRatedColor="gold"
        numberOfStars={5}
        name="rating"
        starDimension="22px"
        starSpacing="2px"
        isSelectable={false}
        className={className}
      />
      <span style={{ marginLeft: '10px' }}>{formattedNote}</span>
    </div>
  );
};

export default RatingStars;