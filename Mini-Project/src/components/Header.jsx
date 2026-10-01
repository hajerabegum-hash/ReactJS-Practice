import { baseURL } from "../utils/Constants";

export const Header = () => {
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
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};
