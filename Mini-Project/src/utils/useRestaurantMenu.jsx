import { useEffect, useState } from "react";
import { menuApi } from "./Constants";

export const useRestaurantMenu = (restaurantId) => {
  const [menu, setMenu] = useState(null);

  async function fetchMenu() {
    const response = await fetch(menuApi + restaurantId);
    const data = await response.json();

    console.log(data);
    setMenu(data);
  }
  useEffect(() => {
    (fetchMenu(), []);
  });
  return menu;
};
