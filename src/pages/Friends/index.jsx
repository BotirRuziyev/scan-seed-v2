import React, { useState } from "react";
import "./css/friends.css";
import mailbox from "../../assets/img/mailbox.png";
import { useNavigate } from "react-router-dom";
import back from "../../assets/img/icon/back.svg";
import star from "../../assets/img/star.svg";
import copy from "../../assets/img/copy.svg";
import avatar from "../../assets/img/avatar.svg";

const Friends = () => {
  const navigate = useNavigate();
  const [openCopy, setCopy] = useState();

  const copyClick = () => {
    setCopy(true);
    setInterval(() => {
      setCopy(false);
    }, 4000);
  };
  return (
    <div className="friends">
      <div className="page-head">
        <button onClick={() => navigate(-1)} className="back-link">
          <img src={back} alt="" />
          Back
        </button>
      </div>
      <div className="friends-in">
        <div className="friends-home">
          <div className="home-img">
            <img src={mailbox} alt="" />
          </div>
          <div className="home-title">Invite friends</div>
          <div className="home-description">
            Invite your friends and increase your speed a lot more!
          </div>
        </div>
        <div className="invite-friends">
          <div className="invite-friends__in">
            <div className="invite-friends__list">
              <div className="list-item">
                <div className="icon">
                  <img src={star} alt="" />
                </div>
                <div className="item-body">
                  <div className="body-title">
                    Invite a friend and get <span>+5</span> to speed
                  </div>
                  <p className="body-description">
                    For each friend you get +5 to the scanning speed, the speed
                    comes forever.
                  </p>
                </div>
              </div>
              <div className="list-item">
                <div className="icon">
                  <img src={star} alt="" />
                </div>
                <div className="item-body">
                  <div className="body-title">
                    <span>+15</span> to speed for each premium friend
                  </div>
                  <p className="body-description">
                    If your referral has telegram premium you get +15 to speed
                    forever.
                  </p>
                </div>
              </div>
            </div>
            <div className="invite-friends__btn__wrapper">
              <button className="invite-friends__btn">Invite Friend</button>
              <button
                className={"copy-btn " + (openCopy ? "active" : "")}
                onClick={() => copyClick()}
              >
                <img src={copy} alt="" />
              </button>
            </div>
          </div>
          <div className="invite-friends__bottom">
            <div className="item">
              <div className="amound">+100</div>
              <div className="item-text">For referrals</div>
            </div>
            <div className="item">
              <div className="amound">+50 000</div>
              <div className="item-text">Your speed</div>
            </div>
            <div className="item">
              <div className="amound">+400</div>
              <div className="item-text">For premium referrals</div>
            </div>
          </div>
        </div>
        <div className="your-referrals">
          <div className="title">A list of your referrals</div>
          <div className="your-referrals__list">
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <div className="list-item" key={i}>
                  <div className="avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="item-body">
                    <div className="user-name">Ivan lesenko</div>
                    <div className="date">22.06.2023</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
