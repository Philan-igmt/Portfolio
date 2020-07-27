import React from "react";
import "./About.css";
// import Aos from "aos";
import "aos/dist/aos.css";
import philani from "./croped.jpg";
import { FaSmile } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { IoMdBuild } from "react-icons/io";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="About">
        <h3>About Me</h3>

        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
              <div className="center">
                <div className="center">
                  <img
                    src={philani}
                    alt=""
                    data-aos="fade-right"
                    className="circle responsive-img hide-on-med-and-down"
                  />
                </div>
                <ul className="black-text">
                  <li>Full Name: Philani Sithembiso Ndhlela</li>
                  <li>Date of Birth: 1998-01-02</li>
                  <li>Gender: Male</li>
                  <li>Location(suburb): Parow/Cape Town</li>
                  <li>Nationality: South African</li>
                  <li>
                    Willing to Relocate: <span className="red-text">YES</span>{" "}
                    to Johannesburg, Pretoria, Durban
                  </li>
                  <li>
                    Matric (year and school):2016/ Amadlelo Aluhlaza Secondary
                    School
                  </li>
                </ul>

                <hr />

                <p className="black-text">
                  <i>
                    I am a problem solver who always stay focused until I
                    achieve what I've set my mind to. I believe that failure is
                    a stepping stone to everything I do, and always puts others
                    first. I am a man of action and will always stay true to my
                    words.I aspare to be a fullstack developer one day.
                  </i>
                </p>
                <hr />
                <p className="black-text">
                  <i>
                    I was inspired by film production in my early high school
                    years since I was doing drama. Every day after school I use
                    to go to the community youth centre to use the computers for
                    researches and help the staff with typing document. So
                    eventually, I got curious about what makes the computer to
                    do what it does, that is how I fell in love with coding
                  </i>
                </p>
                <div
                  className="black-text center"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="info">
                    <GiSoccerBall size="4rem" color="black" />
                    <h5>
                      {" "}
                      <strong>Hobbies</strong>
                    </h5>
                    I love playing soccer,
                    <br /> singing in a choir,
                    <br />
                    spenging time with my debate team,
                    <br /> reading inspirational book and Acting. <br /> I love
                    being in a team player
                    <FaHeart size="2rem" color="red" />
                  </div>
                  <div className="info">
                    <FaUserGraduate size="4rem" color="black" />
                    <h5>
                      <strong>Education </strong>
                    </h5>

                    <p>
                      <strong>Institution:</strong> University of
                      Johannesburg/2017
                    </p>
                    <p>
                      <strong>Course Name:</strong> Bsc in Informatics in
                      Computer Science
                    </p>
                    <p>
                      {" "}
                      <strong>year:</strong> 2017 only
                    </p>
                    <hr />
                    <p>
                      {" "}
                      <strong>Institution:</strong> Cape Peninsula University of
                      Technology
                    </p>
                    <p>
                      <strong>Course Name: </strong> Electrical (control
                      systems) Engineering
                    </p>
                    <p>
                      <strong>year: </strong> 2018-2019
                    </p>
                    <hr />
                    <p>
                      {" "}
                      <strong>Insitution:</strong> LifeChoices Academy
                    </p>
                    <p>
                      {" "}
                      <strong>Course:</strong> Software Engineering
                    </p>
                    <p>
                      {" "}
                      <strong>year:</strong> 2020-currently
                    </p>
                  </div>
                  <div className="info">
                    <IoMdBuild size="4rem" color="black" />
                    <h5>
                      {" "}
                      <strong>Work Experience</strong>
                    </h5>

                    <p>
                      {" "}
                      <strong>Company:</strong> Wimpy Resturant
                    </p>
                    <p>
                      {" "}
                      <strong>Period:</strong> 2014-2019 (part-time)
                    </p>
                    <p>
                      {" "}
                      <strong>Role:</strong> Waiter
                    </p>
                    <p>
                      <strong>Duties</strong>{" "}
                      <ul>
                        <li>working at the till,</li>
                        <li>taking and making orders for customers,</li>
                        <li>helping kids in the play room,</li>
                        <li>counting the stock helping the supervisor.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
