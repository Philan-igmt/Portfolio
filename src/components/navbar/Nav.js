import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Nav.css";
import icon from "../../images/icon.png";
import me from "./home.png";
import { Link } from "react-scroll";

const Nav = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    <div>
      <nav className="nav-wrapper nav-fixed black">
        <div className="container">
          <Link smooth="true" duration={1000} to="home">
            <img src={icon} alt="" />
          </Link>
          <a
          to="#"
          className="sidenav-trigger"
          data-target="mobile"
        >
          <i className="material-icons">menu</i>
        </a>
        
          <ul
            className="right hide-on-med-and-down"
            style={{ marginLeft: "200px" }}
          >
            <li>
              <Link smooth="true" duration={1000} to="home">
                Home
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link smooth="true" duration={1000} to="service">
                Services
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="skill">
                Skills
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="project">
                Projects
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="testi">
                Testimonials
              </Link>
            </li>
            <li className="hide-on-med">
              <Link smooth="true" duration={1000} to="contact">
                Contacts
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="!"></Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* side nav */}
      <ul className="sidenav black-text" id="mobile">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={icon} />
            </div>
            <a smooth="true" duration={1000} to="user">
              <img className="circle" src={me} />
            </a>
            <a smooth="true" duration={1000} to="name">
              <span className="name red-text">Philani Sithembiso Ndhlela</span>
            </a>
            <a smooth="true" duration={1000} to="email">
              <span className="red-text email">
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
