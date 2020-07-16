import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Home.css";
import { FaCrown } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="fullhome" id="home">
      <div className="home">
        <h1 data-aos="fade-down" className="intro">
          <i>
            <span>I'm</span> the <span>Ki</span>ng of Dev
            <span>
              <FaCrown color="red" size="5rem" />
            </span>
          </i>
        </h1>
        <p>
          <i className="red-text" data-aos="zoom-in">
            Philani Sithembiso Ndhlela, Welcome to my Portfolio
          </i>
        </p>

        <div className="scroll">
          <p className="pars">scroll</p>
          <a href="#about" className="btn-floating  btn-large Pale pulse">
            <i className="small material-icons">keyboard_arrow_down</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
