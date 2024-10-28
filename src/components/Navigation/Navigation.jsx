import React from "react";
import "./Navigation.css";
import logo from "../../assets/gauravLogo.png";
import arrow from "../../assets/arrow.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo-section">
        <a href="/">
          <img className="navigation__logo" src={logo} alt="logo" width={"140px"} style={{backgroundColor:"white"}} />
        {/* <h3 className="navigation__name">IGNISCORE SOLUTION</h3> */}
        </a>
      </div>
      <ul className="navigation__link-section">
        <a href="/features" className="text-reg navigation__link">
          Features
        </a>
        <a href="#" className="text-reg navigation__link">
          Pricing
        </a>
        <a href="#" className="text-reg navigation__link">
          Support
        </a>
      </ul>
      <button className="text-reg navigation__cta">
        Get Started
        <img className="navigation__arrow" src={arrow} alt="arrow" />
      </button>
    </nav>
  );
};

export default Navigation;
