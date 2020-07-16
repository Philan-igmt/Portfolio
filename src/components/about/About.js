import React from "react";
import "./About.css";
// import Aos from "aos";
import "aos/dist/aos.css";
import philani from "./croped.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import cv from "./cv.docx";

const About = () => {
  return (
    <div className="about" data-aos="fade-up" id="about">
      <div className="About">
        <h3>About Me</h3>

        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
              <div className="col s2">
                <img
                  src={philani}
                  alt=""
                  data-aos="fade-right"
                  className="circle responsive-img"
                />
              </div>
              <div data-aos="fade-left" className="col s10">
                <p className="black-text">
                  <i>
                    <FaQuoteLeft size="2rem" color="black" />I am a problem
                    solver who always stay focused until I achieve what I have
                    set my mind to. I believe that failure is a stepping stone
                    to everything I do and always puts others first. I am a man
                    of action and will always stay true to my word.
                  </i>
                </p>
                <ul className="black-text">
                  <li>Full Name: Philani Sithembiso Ndhlela</li>
                  <li>Dte of Birth: 1998-01-02</li>
                  <li>Gender: Male</li>
                  <li>Location(suburb): Parow/Cape Town</li>
                  <li>Nationality: South Afrcan</li>
                  <li>
                    Willing to Relocate: <span className="red-text">YES</span>{" "}
                    to Johannesburg, Pretoria, Durban
                  </li>
                </ul>
                <p className="red-text">
                  <i>
                    please check my full CV <a href={cv}>here!</a>
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
