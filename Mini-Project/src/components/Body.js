// import restaurantsArr from "../utils/Mockdata";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useRestaurantArr } from "../utils/useRestaurantArr";
import { Restaurantscard } from "./Restaurantscard";
// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { swiggyRestURL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Body = () => {
  const restaurantArr = useRestaurantArr();

  const isOnline = useOnlineStatus();

  console.log("Im a online", isOnline);

  if (restaurantArr == null) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    <div>
      <div className="rest-container">
        {restaurantArr.map((elem) => {
          return (
            <Link to={`/menu/${elem.info.id}`} key={elem.info.id}>
              {" "}
              <Restaurantscard resDetails={elem} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
