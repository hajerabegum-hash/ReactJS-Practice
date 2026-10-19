// import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { menuApi, menuURL } from "../utils/constants";
import { RestaurantMenuInfoCard } from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [menu, setMenu] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  // async function fetchMenu() {
  //   const response = await fetch(menuURL + resId);

  //   const data = await response.json();
  //   console.log(data);

  //   setMenu(data);
  // }
  const menu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(1);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  if (menu == null) {
    return <div>loading...</div>;
  }

  // console.log(menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categoriesArr =
    menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((elem) => {
      if (
        elem.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        return true;
      } else {
        return false;
      }
    });

  console.log(categoriesArr);

  return (
    <div
      style={{
        paddingLeft: "340px",
        paddingBottom: "50px",
        paddingRight: "340px",
      }}
    >
      <RestaurantMenuInfoCard menu={menu} />
      {categoriesArr.map((category, index) => {
        return (
          <RestaurantCategory
            command={index == showIndex ? true : false}
            setIndex={() => {
              setShowIndex(showIndex == index ? null : index);
            }}
            category={category.card.card}
            key={category.card.card.categoryId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
