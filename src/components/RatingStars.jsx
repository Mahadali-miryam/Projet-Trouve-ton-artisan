import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingStars = ({ note, className }) => {
  return (
    <StarRatings
      rating={parseFloat(note)} 
      starRatedColor="gold"       
      numberOfStars={5}          
      name="rating"              
      starDimension="24px"        
      starSpacing="2px"          
      isSelectable={false}       
      className={className}
    />
  );
};

export default RatingStars;