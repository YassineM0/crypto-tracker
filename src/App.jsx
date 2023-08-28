import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./components/Coin";

const App = () => {
  const [coinArray, setCoinArray] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoinArray(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const changeHandler = (x) => {
    setSearch(x.target.value);
  };
  const searchedCoins = coinArray.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coinApp">
      <div className="inp">
        <form action="">
          <input
            type="text"
            placeholder="enter coin name"
            onChange={changeHandler}
          />
        </form>
      </div>
      {searchedCoins.map((coin) => {
        return (
          <Coin
            name={coin.id}
            image={coin.image}
            price={coin.currentprice}
            mkCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default App;
