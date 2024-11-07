import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import menu from "../../assets/img/icon/menu.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="main-container">
        <div className="header-in">
          <Link to={"/"} className="cancel">
            Cancel
          </Link>
          <div className="header-in__center">
            <div className="center-head">ScanSeed.io</div>
            <div className="center-small__text">bot</div>
          </div>
          <button className="header-in__menu__btn">
            <img src={menu} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
