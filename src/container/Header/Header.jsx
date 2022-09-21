import React from "react";

import "./Header.scss";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

import Button from "../../components/CTA_BUTTON/Button";

const Header = () => {
  return (
    <header id="home">
      <div className="header">
        <div className="header__main">
          <h1 className="gradient__text">
            AI + Real Estate <br /> The Power In Your Hands
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
            Nobis tempora at velit soluta rem quos deserunt laborum dolores sed
            maxime!
          </p>
          <div className="header__input">
            <input type="email" placeholder="Email" />
            <Button title="Get Started" />
          </div>
          <div className="header__people">
            <img src={people} alt="People using our platform" />
            <p>800 real estate agencies using our technology.</p>
          </div>
        </div>
        <div className="header__img">
          <img src={ai} alt="AI platform" />
        </div>
      </div>
    </header>
  );
};

export default Header;
