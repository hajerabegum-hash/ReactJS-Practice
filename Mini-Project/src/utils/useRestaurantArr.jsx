import { useEffect, useState, useContext } from "react";
import { swiggyRestURL } from "./Constants";
import HotelListContext from "./HotelListContext";

// export const useRestaurantArr = () => {
export const useRestaurantArr = () => {
  const { hotelList, setHotelList, setAllItems } = useContext(HotelListContext);
  // const [restaurantArr, setRestaurantsArray] = useState(null);
  //if we use useState for rendering
  // restaurantArr = to access data
  // setRestaurantsArray = to upload data
  async function fetchingRestArray() {
    const response = await fetch(swiggyRestURL);
    const data = await response.json();
    setHotelList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setAllItems(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    console.log(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  //   console.log(data);

  //   setRestaurantsArray(
  //     data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
  //   );
  //   // console.log("data");
  // }

  useEffect(() => {
    console.log("i m inside a component");
    fetchingRestArray();
  }, []);

  return hotelList;

  // return restaurantArr;
  //if we use useEffect to avoid re-rendering
};
