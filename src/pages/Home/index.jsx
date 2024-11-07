import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

import avatar from "../../assets/img/avatar.svg";
import search from "../../assets/img/search.svg";
import robot from "../../assets/img/icon/robot.svg";
import bitcoin from "../../assets/img/bitcoin.svg";
import ethereumeth from "../../assets/img/ethereum-eth.svg";
import ton from "../../assets/img/coin.svg";

const coins = [
  {
    id: 1,
    src: bitcoin,
  },
  {
    id: 2,
    src: ethereumeth,
  },
  {
    id: 3,
    src: ton,
  },
];
const Home = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [scanningBtn, setScanningBtn] = useState(null);
  const coinBtn = (buttonId) => {
    setSelectedBtn(buttonId);
  };
  const scanBtn = (val) => {
    setScanningBtn(val);
  };

  return (
    <div className="home">
      <div className="main-container">
        <div className="home-head">
          <div className="left-block">
            <div className="user-info">
              <div className="avatar">
                <Link to="/settings">
                  <img src={avatar} alt="" />
                </Link>
              </div>
              <div className="user-name">
                <Link to="/settings">Username</Link>
              </div>
            </div>
          </div>
          <div className="search-btn">
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className="right-block">
            <div className="your-money">
              <Link to={"/wallet"} className="amound">
                8 938$
              </Link>
              <Link to={"/wallet"}>
                <div className="monetary-unit">$</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-coin">
          <div className="search-speed">
            <div className="icon">
              <img src={robot} alt="" />
            </div>
            <div className="speed-body">
              <div className="speed-num">1000</div>
              <div className="speed-text">Search speed</div>
            </div>
          </div>
          <div className="coins">
            {coins.map((coin) => {
              return (
                <button
                  className={
                    "coins-item " + (selectedBtn === coin.id ? "active" : "")
                  }
                  key={coin.id}
                  onClick={() => coinBtn(coin.id)}
                >
                  <img src={coin.src} alt="" />
                </button>
              );
            })}
          </div>
        </div>
        <div className="home-terminal">
          <div className="terminal-head">
            <div className="terminal-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="head-text">Mining ETH wallet - ScanSeed.io</div>
          </div>
          <div className="terminal-body">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return (
                <div className={"item " + (i === 3 ? "error" : "")} key={i}>
                  image foil chalk couch thing company salt question job demise
                  treat breeze lecture suffer begin drip accident rough crouch
                  patient alien thunder loud milk
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-scanning">
          <div className="home-scanning__card">
            <div className="card-item">
              <div className="amound">2132312323</div>
              <div className="item-text">Scanned</div>
            </div>
            <div className="card-item">
              <div className="amound">3432423432</div>
              <div className="item-text">Found</div>
            </div>
            <div className="card-item">
              <div className="amound">1000000</div>
              <div className="item-text">Failed</div>
            </div>
          </div>
          <div className="home-scanning__btn__wrapper">
            <button
              className={
                "home-scanning__btn " + (scanningBtn ? "scanning-active" : "")
              }
              onClick={() => scanBtn(true)}
            >
              <span className="start">Start</span>
              <span className="scanning">Scanning...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
