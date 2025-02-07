import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <img
          src="https://i.pinimg.com/originals/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"
          alt="logo"
        />
      </div>
      <div className="NavItems">
        <ul className="NavItemsList">
          <li className="NavItem">Home</li>
          <li className="NavItem">About Us</li>
          <li className="NavItem">Contact</li>
          <li className="NavItem">Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { item } = props;
  const { name, location, stars, image } = item;
  const imageSrc = `https://media-assets.swiggy.com/swiggy/image/upload/${image}`;
  return (
    <div>
      <div className="PictureRestaurantCard">
        <img src={imageSrc} alt="" />
      </div>
      <div className="InformationRestaurantCard">
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h4>
          <img src="" alt="" />
          {stars}
        </h4>
      </div>
    </div>
  );
};
const RestaurantList = () => {
  return (
    <div>
      <RestaurantCard />
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <RestaurantList />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
