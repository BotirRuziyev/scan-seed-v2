import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/wallet.css";
import back from "../../assets/img/icon/back.svg";
import wheel from "../../assets/img/wheel-animation.svg";
import star from "../../assets/img/star.svg";
import star2 from "../../assets/img/star2.svg";
import robot from "../../assets/img/icon/robot.svg";
import fluent_bot from "../../assets/img/fluent_bot.svg";
import mikr from "../../assets/img/mikr.svg";
import subtract from "../../assets/img/subtract.svg";
import twitter from "../../assets/img/twitter.svg";
import $ from "../../assets/img/icon/$.svg";
import bitcoin from "../../assets/img/bitcoin.svg";
import ethereumeth from "../../assets/img/ethereum-eth.svg";
import ton from "../../assets/img/coin.svg";
import coin from "../../assets/img/coin2.svg";
import ChooseConvenientModal from "../../components/ChooseConvenientModal";

const Wallet = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  const [openAnim, setAnim] = useState([]);
  const checkAnim = (id) => {
    if (!openAnim.includes(id)) {
      setAnim([...openAnim, id]);
    }
  };
  const [openWithdraw, setWithdraw] = useState([]);
  const withdrawClick = (buttonId) => {
    if (!openWithdraw.includes(buttonId)) {
      setWithdraw([...openWithdraw, buttonId]);
    }
  };
  const [modal, setmodalOpen] = useState(false);
  const modalClick = () => {
    setmodalOpen(!modal);
    document.body.style.overflow = "hidden";
  };
  const updateModal = () => {
    setmodalOpen(false);
    document.body.style.overflow = "visible";
  };
  const [openSuccessfull, setSuccessfull] = useState([]);
  const successfullyClick = (id) => {
    if (!openSuccessfull.includes(id)) {
      setSuccessfull([...openSuccessfull, id]);
    }
  };
  const [openFree, setFree] = useState([]);
  const freeClick = (id) => {
    if (!openFree.includes(id)) {
      setFree([...openFree, id]);
    }
  };
  const boost = [
    {
      id: 1,
      title: "Auto Lite",
      x: "x1",
      description: "Automatic scanning 24/7 ",
      bunus: 0,
      wallet: "+50",
      amound: 20,
    },
    {
      id: 2,
      title: "Auto Standart",
      description: "Automatic scanning 24/7 ",
      x: "x1",
      bunus: 50,
      wallet: "+300",
      amound: 100,
    },
    {
      id: 3,
      title: "Auto PRO",
      description: "Automatic scanning 24/7 ",
      x: "x1",
      bunus: 0,
      wallet: "+50",
      amound: 20,
    },
    {
      id: 4,
      title: "Auto Premium",
      description: "Automatic scanning 24/7 ",
      x: "x1",
      bunus: 50,
      wallet: "+300",
      amound: 100,
    },
    {
      id: 5,
      title: "Auto Premium",
      description: "Automatic scanning 24/7 ",
      x: "x1",
      bunus: 50,
      wallet: "+300",
      amound: 100,
    },
  ];
  const free = [
    {
      id: 1,
      src: mikr,
      title: "Subscribe group",
      wallet: "+1",
    },
    {
      id: 2,
      src: subtract,
      title: "Subscribe group",
      wallet: "+1",
    },
    {
      id: 3,
      src: twitter,
      title: "Subscribe twitter",
      wallet: "+2",
    },
  ];
  const withdraw = [
    {
      id: 1,
      src: ton,
      title: "0.000000",
      wallet: "+1",
    },
    {
      id: 2,
      src: ethereumeth,
      title: "0.000000",
    },
    {
      id: 3,
      src: bitcoin,
      title: "0.000000",
    },
    {
      id: 4,
      src: coin,
      title: "0.000000",
    },
  ];
  return (
    <div className="wallet">
      <div className="page-head">
        <button onClick={() => navigate(-1)} className="back-link">
          <img src={back} alt="" />
          Back
        </button>
      </div>
      <div className="wallet-in">
        <div className="wallet-home">
          <div className="home-img">
            <img src={wheel} alt="" />
          </div>
          <div className="home-title">ScanSeed Wallet</div>
          <div className="home-description">
            Start searching with incredible speed, top up your balance and buy
            improvements!
          </div>
        </div>
        <div className="your-balance">
          <div className="your-balance__in">
            <div className="your-balance__in__amound">
              <span className="monetary-unit">$</span> 568
            </div>
            <div className="your-balance__in__text">your balance</div>
            <button className="topup-balance__btn" onClick={modalClick}>
              <span>Top up balance</span>
            </button>
          </div>
          <div className="your-balance__bottom">
            <div className="item">
              <div className="icon">
                <img src={star} alt="" />
              </div>
              <div className="item-body">
                <div className="title">+ 1000</div>
                <div className="description">Free speed</div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={star} alt="" />
              </div>
              <div className="item-body">
                <div className="title">+ 1000</div>
                <div className="description">Free speed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="boost wallet-section">
          <div className="title">BOOST</div>
          <div className="boost-card wallet-section__card">
            <div className="card-head">
              <div className="icon">
                <img src={robot} alt="" />
              </div>
              Buy speed
            </div>
            <div className="card-in">
              {boost.map((item) => {
                return (
                  <div
                    className="card-item"
                    key={item.id}
                    onClick={() => successfullyClick(item.id)}
                  >
                    <div className="icon">
                      <img src={fluent_bot} alt="" />
                    </div>
                    <div className="item-body">
                      <div className="left-block">
                        <div className="item-body__title">
                          {item.title}
                          <span>{item.x}</span>
                        </div>
                        {item.description &&
                        !openSuccessfull.includes(item.id) ? (
                          <div className="item-body__description">
                            {item.description}
                          </div>
                        ) : (
                          ""
                        )}
                        {openSuccessfull.includes(item.id) ? (
                          <button className="successfully">Successfully</button>
                        ) : (
                          ""
                        )}
                        {openSuccessfull.includes(10) ? (
                          <button className="insufficient-funds">
                            Insufficient funds
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="right-block">
                        <div className="bonus">(Bonus {item.bunus})</div>
                        <div className="wallet-val">{item.wallet} wallet/s</div>
                        <div className="monetary-unit">{item.amound} USDT</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="free wallet-section">
          <div className="title">free</div>
          <div className="free-card wallet-section__card">
            <div className="card-head">
              <div className="icon">
                <img src={star2} alt="" />
              </div>
              Reward for activity
            </div>
            <div className="card-in">
              {free.map((item) => {
                return (
                  <div
                    className="card-item"
                    key={item.id}
                    onClick={() => freeClick(item.id)}
                  >
                    <div className="icon">
                      <img src={item.src} alt="" />
                    </div>
                    <div
                      className={
                        "item-body " +
                        (openFree.includes(item.id) ? "active" : "")
                      }
                    >
                      <div className="left-block">
                        <div className="item-body__title">{item.title}</div>
                      </div>
                      <div className="right-block">
                        <div className="wallet-val">{item.wallet} wallet/s</div>
                      </div>
                      <div className={"item-btn"}>
                        <button className="btn go-again__btn">Go again</button>
                        <button
                          className="btn check-btn"
                          onClick={() => checkAnim(item.id)}
                        >
                          <span
                            className={
                              "check-btn__content " +
                              (openAnim.includes(item.id) ? "noactive" : "")
                            }
                          >
                            Check
                          </span>
                          <span
                            className={
                              "check-anim " +
                              (openAnim.includes(item.id) ? "active" : "")
                            }
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5.7177C1.90835 2.3277 5.37898 0.312195 8.75186 1.21596C12.1248 2.11972 14.1227 5.60051 13.2143 8.99052M8.78287 1.22427C12.1386 2.12344 14.1264 5.58663 13.2226 8.95952C12.3188 12.3324 8.86582 14.3377 5.51005 13.4386"
                                stroke="white"
                                strokeWidth="1.9272"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="withdraw wallet-section" id="withdraw">
          <div className="title">wITHDRAW</div>
          <div className="withdraw-card wallet-section__card">
            <div className="card-head">
              <div className="icon">
                <img src={$} alt="" />
              </div>
              Reward for activity
            </div>
            <div className="card-in">
              {withdraw.map((item) => {
                return (
                  <div className="card-item" key={item.id}>
                    <div className="icon">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="item-body">
                      <div className="left-block">
                        <div className="item-body__title">{item.title}</div>
                      </div>
                      <div className="right-block">
                        <div className="item-btn">
                          <button
                            className={
                              "btn " +
                              (openWithdraw.includes(item.id) ? "selected" : "")
                            }
                            onClick={() => withdrawClick(item.id)}
                          >
                            <span>Withdraw</span>
                            <span>Insufficient funds</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="withdraw-card__bottom">
          <div className="card-item">
            <div className="icon">
              <img src={coin} alt="" />
            </div>
            <div className="card-body">
              <div className="title">USDT Top up</div>
              <div className="description">Convert all Balances to USDT</div>
            </div>
          </div>
        </div>
      </div>
      <ChooseConvenientModal modal={modal} updateModal={updateModal} />
    </div>
  );
};

export default Wallet;
