import React from 'react';
import { Rating } from 'react-simple-star-rating';

const RatingStars = ({ note, className  }) => {
    const noteArrondie = Math.round(note * 20);
    return <
      Rating ratingValue={noteArrondie} 
      readonly={true} 
      allowHalfIcon={true} 
      className={className} 
      />;
  };

export default RatingStars;