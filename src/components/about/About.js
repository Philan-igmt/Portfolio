import React from "react";
import "./About.css";
// import Aos from "aos";
import "aos/dist/aos.css";
import philani from "./philani.png";
import { FaInfo } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import cv from "./cv.docx";
import { FaRegCalendarAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" data-aos="fade-up" id="about">
      <h2
        id="heading"
        className="center white-text"
        style={{ padding: "50px" }}
      >
        About Me
      </h2>
    </div>
  );
};

export default About;
