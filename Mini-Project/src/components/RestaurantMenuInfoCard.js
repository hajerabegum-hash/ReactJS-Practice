import React from "react";
import { baseURL, imgURL } from "../utils/constants";

export const RestaurantMenuInfoCard = ({ menu }) => {
  const {
    name,
    cloudinaryImageId,
    cuisine,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    availability,
  } = menu.data.cards[2].card.card.info;

  return (
    <div className="menu-info-div">
      <h1>{name}</h1>
      <img className="menu-info-img" src={imgURL + cloudinaryImageId} />
      <p>
        ⭐{avgRating} {totalRatingsString} {costForTwoMessage}
      </p>
      <p>{cuisine}</p>
      <p>
        {areaName}|{availability.opened}? <b>Open 🟢</b>: <b>Closed 🚨</b>
      </p>
    </div>
  );
};
