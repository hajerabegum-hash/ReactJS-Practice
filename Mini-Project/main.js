import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://th.bing.com/th/id/OIP.g9wC5wz3mvd_ALYjL1YGtgHaFS?w=254&h=182&c=7&r=0&o=7&pid=1.7&rm=3" />
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
          <li>SHOPPTING</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurantscard = ({ resDetails }) => {
  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        src="https://th.bing.com/th/id/OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7?w=269&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        alt="rest-logo"
      />
      <h3>{resDetails.resName}</h3>
      {/* <h4>PIZZA</h4>
      <h4> ✨ Rating 4.5</h4>
      <h4>DeliveryTime: 36,</h4>
      <h4>costForTwo: "₹300 for two"</h4> */}
    </div>
  );
};

const restaurantsArr = [
  {
    id: "40377",
    resName: "Lucky Restaurant",
    cuisine: ["Biryani", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 36,
    costForTwo: "₹300 for two",
    imgId: "uvapcfajlsbctskdhuhl",
    location: "Santosh Nagar",
  },
];

const Body = () => {
  return (
    <div className="rest-container">
      <Restaurantscard resDetails={restaurantsArr[0]} />
      {/* <Restaurantscard />
      <Restaurantscard />
      <Restaurantscard />
      <Restaurantscard />
      <Restaurantscard />
      <Restaurantscard />
      <Restaurantscard />
      <Restaurantscard />
      <Restaurantscard /> */}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <h4>© 2026 Atiya Shaik. All rights reserved.</h4>
    </div>
  );
};

const RestaurantsArr = () => {
  return (
    <div>
      <Header />;
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RestaurantsArr />);
