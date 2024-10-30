import React from 'react';
import { Rating } from 'react-simple-star-rating';

const RatingStars = ({ note, className }) => {
  // Convertit la note sur une échelle de 0 à 5 en une échelle de 0 à 100
 const noteArrondie = note * 20;

  return (
    <Rating
      ratingValue={noteArrondie} 
      readonly={true} 
      allowHalfIcon={true} 
      className={className} 
    />
  );
};

export default RatingStars;