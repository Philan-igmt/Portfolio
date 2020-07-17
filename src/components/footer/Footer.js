import React from "react";
import "./Footer.css";
import Logo from "./LifeChoices.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <h5 className="foo">&copy;2020 By Philan ISithembiso</h5>
        <h5>Supported by</h5>
        <span>
          <a href="https://www.lifechoices.co.za/" target="_blank">
            {" "}
            <img className="image" src={Logo} alt="" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
