import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { FaPaintBrush } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="allserv" id="service">
      <div>
        <h3 className="head">Services</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12 m4" data-aos="fade-right">
            <h4 className="center">Web design</h4>
            <div className="center">
              <FaPaintBrush size="7rem" color="black" />
            </div>
            <p className="center">
              Imagination is the most powerful tool of the mind
            </p>
          </div>
          <div className="col s12 m4" data-aos="fade-up">
            <h4 className="center">Web Development</h4>
            <div className="center">
              <FaLaptopCode size="7rem" color="black" />
            </div>
            <p className="center">Full-Stack Developer</p>
          </div>
          <div className="col s12 m4" data-aos="fade-left">
            <h4 className="center">App Development</h4>
            <div className="center">
              <FaMobileAlt size="7rem" color="black" />
            </div>
            <p className="center">Building Native Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
