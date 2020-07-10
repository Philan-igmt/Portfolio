import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Nav.css";
import icon from "../../images/icon.png";
import me from "./home.png";

const Nav = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    <div>
      <nav className="nav-wrapper nav-fixed black">
        <div className="container">
          <a href="#!">
            <img src={icon} alt="" />
          </a>
          <a href="#!" className="sidenav-trigger" data-target="mobile">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down" style={{marginLeft:"200px"}}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#testi">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
            <li>
              <a href="#!"></a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav black-text" id="mobile">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={icon} />
            </div>
            <a href="#user">
              <img className="circle" src={me} />
            </a>
            <a href="#name">
              <span className="name black-text">
                Philani Sithembiso Ndhlela
              </span>
            </a>
            <a href="#email">
              <span className="white-text email">
                philanisithembiso@gmail.com
              </span>
            </a>
          </div>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#testi">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
        <li>
          <a href="#!"></a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
