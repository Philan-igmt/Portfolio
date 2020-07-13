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
      <div className="row">
        <div className="col s12 l12">
          <div className="card horizontal">
            <div className="card-image">
              <img src={philani} alt="cool" />
              <a href={cv} className="btn red">
                DOWNLOAD MY CV
              </a>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <ul className="collapsible">
                  <li className="active">
                    <div
                      className="collapsible-header tooltipped"
                      data-position="bottom"
                      data-tooltip="click to view"
                    >
                      <FaInfo color="black" size="4rem" />
                      Bio
                    </div>
                    <div className="collapsible-body">
                      <p>
                        I am a problem solver who always stays focused until I
                        achieve what I have set my mind to. I believe that
                        failure is a stepping stone to everything I do and
                        always puts others first. I am a man of actions and will
                        always stay true to my word.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div
                      className="collapsible-header tooltipped"
                      data-position="bottom"
                      data-tooltip="click to view"
                    >
                      <FaBasketballBall color="black" size="4rem" />
                      Hobbies
                    </div>
                    <div className="collapsible-body">
                      <p>
                        <span>
                          <FaFilm color="black" size="2rem" />
                        </span>{" "}
                        <span style={{ color: "red" }}>Acting</span> -I was
                        doing drama in High School
                      </p>
                      <p>
                        <FaBasketballBall color="black" size="2rem" />
                        <span style={{ color: "red" }}>Soccer</span>-I was
                        playing for Cape Peninsula University of Technology
                        first team in 2018,19
                      </p>
                      <p>
                        <FaMicrophone color="black" size="2rem" />
                        <span style={{ color: "red" }}>Debate</span>these was my
                        part time activity when I was curious about some,some
                        debate team just bring all that to live
                      </p>
                      <p>
                        <FaMicrophone color="black" size="2rem" />
                        <span style={{ color: "red" }}>Singing</span>-I sing was
                        singing in for the community choir
                      </p>
                    </div>
                  </li>
                  <li>
                    <div
                      className="collapsible-header tooltipped"
                      data-position="bottom"
                      data-tooltip="click to view"
                    >
                      <FaRegCalendarAlt color="black" size="4rem" />
                      OverView
                    </div>
                    <div className="collapsible-body" id="view">
                      <div>
                        <p>FullName</p>
                        <p>Philani Sithembiso Ndhlela</p>
                      </div>
                      <div>
                        <p>Date of Birth:</p>
                        <p> 1998-01-02</p>
                      </div>
                      <div>
                        <p>Gender: </p>
                        <p>Male</p>
                      </div>
                      <div>
                        <p>Location(surbub):</p>
                        <p>Parow, Cape Town</p>
                      </div>
                      <div>
                        <p>Nationality:</p>
                        <p> South African</p>
                      </div>
                      <div>
                        <p> Willing to Relocate:</p>
                        <p className="red-text">Yes</p>
                      </div>
                      <div>
                        <p>Where to: </p>
                        <p>Johannesburg,Pretoria,Durban</p>
                      </div>
                      <div>
                        <i className="red-text">
                          please the check the rest by clicking the download
                          button
                        </i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
