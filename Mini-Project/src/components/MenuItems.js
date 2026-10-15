import React from "react";
import { baseURL, imgURL, menuURL } from "../utils/constants";

export const MenuItems = ({ details }) => {
  const { name, price, description, imageId, ratings } = details;

  return (
    <div className="menu-item-card">
      <div>
        <h1>{name}</h1>
        <p> Price  :  {price / 100}</p>
        <p>
          ⭐️{ratings.aggregatedRating.rating} (
          {ratings.aggregatedRating.ratingCountV2})
        </p>
        <p>{description}</p>
      </div>

      <div>
        <img alt={name} className="menu-item-img" src={imgURL + imageId} />
      </div>
    </div>
  );
};

