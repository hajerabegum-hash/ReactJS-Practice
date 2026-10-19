// import restaurantsArr from "../utils/Mockdata";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useRestaurantArr } from "../utils/useRestaurantArr";
import { Restaurantscard } from "./Restaurantscard";
// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { swiggyRestURL } from "../utils/Constants";
import { Link } from "react-router-dom";
import withDiscountLabel from "./withDiscountLabel";

const Body = () => {
  const restaurantArr = useRestaurantArr();

  const DiscountedRestaurantCard = withDiscountLabel(Restaurantscard);

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
        {/* {restaurantArr.map((elem) => {*/}
        {restaurantArr.map((elem, index) => {
          console.log(elem.info.aggregatedDiscountInfoV3);

          return (
            <Link to={`/menu/${elem.info.id}`} key={elem.info.id}>
              {elem.info.aggregatedDiscountInfoV3 ? (
                <DiscountedRestaurantCard resDetails={elem} />
              ) : (
                <Restaurantscard resDetails={elem} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
