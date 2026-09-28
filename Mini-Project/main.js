import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-img">
        <img src="https://th.bing.com/th/id/OIP.g9wC5wz3mvd_ALYjL1YGtgHaFS?w=254&h=182&c=7&r=0&o=7&pid=1.7&rm=3" />
      </div>
      <div className="search-bar">
        <input placeholder=" <- What are you looking for Today ?" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>SHOPPTING</li>
        </ul>
      </div>
    </div>
  );
};

const IceCreamLayout = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<IceCreamLayout />);
