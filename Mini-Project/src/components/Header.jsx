import { Link } from "react-router-dom";
import { baseURL } from "../utils/Constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantArr";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import HotelListContext from "../utils/HotelListContext";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const userObj = useContext(UserContext);
  const { hotelList, setHotelList, allItems } = useContext(HotelListContext);
  return (
    <div className="header">
      <div className="header-logo">
        <img src={baseURL} />
      </div>
      <div className="search-bar">
        <input
          placeholder="What are you looking for Today ?"
          type="text"
          onChange={(e) => {
            // const filteredArr =  hotelList.filter((restaurantObj)=>{
            const filteredArr = allItems.filter((restaurantObj) => {
              if (
                restaurantObj.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              ) {
                return true;
              } else {
                return false;
              }
            });

            setHotelList(filteredArr);
          }}
        />

        {/* <span className="search-logo">🔍 </span> */}
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? <b>Online 🟢</b> : <b>Offline 🔴</b>}</li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="/about" style={{ textDecoration: "none" }}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              CART
            </Link>
          </li>

          <li>
            <Link to="/grocery" style={{ textDecoration: "none" }}>
              GROCERY
            </Link>
          </li>
          <li>{userObj.name}</li>
        </ul>
      </div>
    </div>
  );
};
