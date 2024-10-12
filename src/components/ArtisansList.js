import React from "react";
import ArtisanCards from "./ArtisanCards";
import artisansData from "../artisans.json";

const ArtisanList = () => {
  return (
    <div className="artisan-list d-flex flex-wrap justify-content-around">
      {artisansData.map((artisan) => (
        <ArtisanCards key={artisan.id} artisan={artisan} />
      ))}
    </div>
  );
};

export default ArtisanList;
