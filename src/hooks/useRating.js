import { useMemo } from 'react';

const useRating = (note) => {
  const ratingValue = useMemo(() => Math.round(note * 20), [note]); // Conversion en pourcentage avec arrondi
  return ratingValue;
};

export default useRating;