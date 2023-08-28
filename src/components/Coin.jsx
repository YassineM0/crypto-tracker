import React from "react";
import "./Coin.css";

const Coin = ({ name, image, price, mkCap, priceChange }) => {
  return (
    <div className="container">
      <div className="coin">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
      <div className="coinData">
        <p>Rs.{price}</p>
        <p>{priceChange}</p>
        <div className="mkCap">
          <p>market Cap</p>
          <p>Rs.{mkCap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
