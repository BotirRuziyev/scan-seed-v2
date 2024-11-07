import React, { useState } from "react";
import "./css/modal.css";
import star from "../../assets/img/star2.svg";
import ton from "../../assets/img/coin2.svg";
import bitcoin from "../../assets/img/bitcoin.svg";
import transactionSearch from "../../assets/img/transaction-search.png";
const ChooseConvenientModal = ({ modal, updateModal }) => {
  const modalFilter = (filter) => {
    continueAnim();
    document.querySelectorAll(".modal-in").forEach((e) => {
      if (e.getAttribute("data-filter") === filter) {
        e.classList.add("active");
        e.classList.remove("noactive");
      } else {
        e.classList.add("noactive");
        e.classList.remove("active");
      }
    });
  };
  const handleClick = (event) => {
    const closestModal = event.target.closest(".modal-in");
    if (!closestModal) {
      updateModal(false);
      document.querySelectorAll(".modal-in").forEach((e) => {
        e.classList.remove("active");
        if (e.getAttribute("data-filter") !== "main-modal") {
          e.classList.add("noactive");
        } else {
          e.classList.remove("noactive");
        }
      });
    }
  };
  const [openAnim, setAnim] = useState();
  const continueAnim = () => {
    setAnim(true);
  };
  const [openCheckAnim, setCheckAnim] = useState();
  const checkAnim = () => {
    setCheckAnim(true);
  };
  return (
    <div className={"modal " + (modal ? "active" : "")} onClick={handleClick}>
      <div className="modal-in" data-filter="main-modal">
        <div className="head">Сhoose a convenient way</div>
        <div className="modal-btn__wrapper">
          <button className="modal-btn" onClick={() => modalFilter("telegram")}>
            <img src={star} alt="" />
            <span>Telegram Stars</span>
          </button>
          <button
            className="modal-btn"
            onClick={() => modalFilter("enter-amound")}
          >
            <img src={ton} alt="" />
            <span>Usdt trc-20</span>
          </button>
          <button
            className="modal-btn"
            onClick={() => modalFilter("enter-amound")}
          >
            <img src={bitcoin} alt="" />
            <span>Other crypto (btc,eth,bnb..)</span>
          </button>
        </div>
      </div>
      <div className="modal-in noactive" data-filter="telegram">
        <div className="head">Enter the amount of the top-up</div>
        <div className="modal-btn__wrapper">
          <button className="modal-btn">
            <img src={star} alt="" />
            <span>1500 Stars (+30$)</span>
          </button>
          <button className="modal-btn">
            <img src={star} alt="" />
            <span>5 000 Stars (+110$)</span>
          </button>
          <button className="modal-btn">
            <img src={star} alt="" />
            <span>10 000 Stars (+220$)</span>
          </button>
          <button className="modal-btn">
            <img src={star} alt="" />
            <span>25 000 Stars (+550$)</span>
          </button>
        </div>
      </div>
      <div className="modal-in noactive" data-filter="enter-amound">
        <div className="head">Enter the amount of the top-up</div>
        <div className="modal-form__wrapper">
          <form onClick={(e) => e.preventDefault()}>
            <div className="form-control">
              <input
                type="number"
                className="amound-input"
                placeholder="100$"
              />
            </div>
            <div className="form-control">
              <button
                className="back-btn"
                onClick={() => modalFilter("main-modal")}
              >
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM17 7L1 7V9L17 9V7Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                className="continue-btn"
                onClick={() => modalFilter("transaction")}
              >
                <span
                  className={
                    "continue-btn__content " + (openAnim ? "noactive" : "")
                  }
                >
                  Continue
                </span>
                <span className={"continue-anim " + (openAnim ? "active" : "")}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.69373 7.37981C2.79283 3.2779 6.99229 0.839143 11.0735 1.9327C15.1547 3.02625 17.5721 7.238 16.473 11.3399M11.111 1.94275C15.1715 3.03075 17.5766 7.22121 16.4831 11.3024C15.3895 15.3836 11.2114 17.8101 7.15089 16.7221"
                      stroke="white"
                      strokeWidth="2.33191"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-in noactive" data-filter="transaction">
        <div className="head">Searching for your transaction</div>
        <div className="search-img">
          <img src={transactionSearch} alt="" />
        </div>
        <div className="transaction-btn__wrapper">
          <button className="btn go-again__btn">Go again</button>
          <button className="btn check-btn" onClick={checkAnim}>
            <span
              className={
                "check-btn__content " + (openCheckAnim ? "noactive" : "")
              }
            >
              Check
            </span>
            <span className={"check-anim " + (openCheckAnim ? "active" : "")}>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.69373 7.37981C2.79283 3.2779 6.99229 0.839143 11.0735 1.9327C15.1547 3.02625 17.5721 7.238 16.473 11.3399M11.111 1.94275C15.1715 3.03075 17.5766 7.22121 16.4831 11.3024C15.3895 15.3836 11.2114 17.8101 7.15089 16.7221"
                  stroke="white"
                  strokeWidth="2.33191"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseConvenientModal;
