import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.svg";
import abstractShapes from "../../assets/abstract-shapes.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__column">
        <h1 className="h1 hero__heading">
          <span className="hero__heading-gradient">Comprehensive IT</span>
          Solutions <span className="hero__heading-gradient">for Your</span>
          Business
        </h1>
        <p className="text-reg hero__subheading">
          igniscore Solutions is your trusted partner for seamless technology
          integration and ongoing support. Our expert team delivers tailored
          services to help you modernize your infrastructure, improve
          efficiency, and drive growth.
        </p>
        {/* <div className="button-container"> */}
      <button className="custom-button">Get a Quote</button>
      <button className="custom-button outline">Learn More</button>
    {/* </div> */}
        <div className="hero__input-container">
          <input
            className="hero__input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="text-reg hero__submit">
            Contact Us
            <img className="hero__arrow" src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="hero__column">
        <img
          className="hero__graphic"
          src={abstractShapes}
          alt="abstract shapes"
        />
      </div>
    </section>
  );
};

export default Hero;
