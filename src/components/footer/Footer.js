import React from "react";
import "./Footer.css";
import Logo from "./LifeChoices.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <h5 className="foo">&copy;2020 By Philan ISithembiso</h5>
        <h5>Sponsored by</h5>
        <span>
          <img className="image" src={Logo} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
