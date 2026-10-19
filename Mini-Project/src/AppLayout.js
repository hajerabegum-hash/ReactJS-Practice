import { Outlet, useViewTransitionState } from "react-router-dom";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import UserContext from "./utils/UserContext";
import HotelListContext from "./utils/HotelListContext";
import { useEffect, useState } from "react";

export const AppLayout = () => {
  let [user, setUser] = useState({
    name: "Crafted for Cravings.",
  });

  const [allItems, setAllItems] = useState(null); // Master COPY

  const [hotelList, setHotelList] = useState(null); // UI COPY

  return (
    <div>
      <HotelListContext.Provider
        value={{ hotelList, setHotelList, allItems, setAllItems }}
      >
        <UserContext.Provider value={user}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </HotelListContext.Provider>
      {/* <HotelListContext.Provider value={{hotelList, setHotelList, allItems, setAllItems}}>
      </UserContext.Provider value={user}>

      {/* <UserContext.Provider
        value={{ name: "hajera", email: "hajera@gmail.com" }} */}
      {/* > */}
      {/* <HotelListContext.Provider value={user}> */}
      {/* <Header /> */}
      {/* <Outlet /> */}
      {/* <Footer /> */}
      {/* </HotelListContext.Provider> */}
      {/* </UserContext.Provider> */}
      {/* </HotelListContext.Provider> */}
    </div>
  );
};
