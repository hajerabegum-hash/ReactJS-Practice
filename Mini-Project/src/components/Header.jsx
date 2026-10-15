import { Link } from "react-router-dom";
import { baseURL } from "../utils/Constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="header-logo">
        <img src={baseURL} />
      </div>
      <div className="search-bar">
        <input placeholder="What are you looking for Today ?" type="text" />

        {/* <span className="search-logo">🔍 </span> */}
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? <b>Online 🟢</b> : <b>Offline 🔴</b>}</li>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>

          <li>
            <Link to="/grocery">GROCERY</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
