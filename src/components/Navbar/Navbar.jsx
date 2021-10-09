import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="nav">
      <div className="brand-wrap">
        <span className="brand">E-Mart</span>
      </div>
      <div className="nav-item">
        <img
          src={process.env.PUBLIC_URL + "/images/cart.svg"}
          alt="cart icon"
          className="cart"
          onClick={() => props.modal_show()}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/profile.svg"}
          alt="profile"
          className="profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
