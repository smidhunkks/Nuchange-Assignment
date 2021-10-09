import React from "react";
import "./Cards.css";



function Cards(props) {
  
  return (
    <div className="card-wrap">
      <div className="card-outer">
        <div className="card-image">
          <img src={process.env.PUBLIC_URL + `/images/${props.data.name}.png`} alt="product" className="product-image" />
        </div>
        <div className="card-details">
          <div className="card-detail-top">
            <div className="card-price">
              <div className="item-name">{props.data.name}</div>
              <div className="item-vendor">Vendor : {props.data.vendor}</div>
            </div>
            {props.data.available?<p className="stock">In Stock</p>:<p className="stock-out">Out of Stock</p>}
          </div>

          <div className="card-bottom">
            <div className="price">
              Price
              <br />
              <p className="cost">₹{props.data.price}</p>
            </div>
            {props.data.available?<button className="cart-button" onClick={()=>{props.onclick(props.data)}}>Add to cart</button>:<button className="cart-button button-inactive">Add to cart</button>}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
