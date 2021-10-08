import React from "react";
import "./Cards.css";
import banana from "../../images/Banana.png";

function Cards() {
  return (
    <div className="card-wrap">
      <div className="card-outer">
        <div className="card-image">
          <img src={banana} alt="product" className="product-image" />
        </div>
        <div className="card-details">
          <div className="card-detail-top">
            <div className="card-price">
              <div className="item-name">Banana</div>
              <div className="item-vendor">Vendor : Organic farms</div>
            </div>
            <p className="stock">In Stock</p>
          </div>

          <div className="card-bottom">
            <div className="price">
              Price
              <br />
              <p className="cost">Rs200</p>
            </div>
            <button className="cart-button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
