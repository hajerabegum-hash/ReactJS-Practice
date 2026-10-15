import { useEffect, useState } from "react";
import { swiggyRestURL } from "./Constants";

export const useRestaurantArr = () => {
  const [restaurantArr, setRestaurantsArray] = useState(null);
  //if we use useState for rendering
  // restaurantArr = to access data
  // setRestaurantsArray = to upload data
  async function fetchingRestArray() {
    const response = await fetch(swiggyRestURL);
    const data = await response.json();

    console.log(data);

    setRestaurantsArray(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    // console.log("data");
  }

  useEffect(() => {
    console.log("i m inside a component");
    fetchingRestArray();
  }, []);

  return restaurantArr;
  //if we use useEffect to avoid re-rendering
};
