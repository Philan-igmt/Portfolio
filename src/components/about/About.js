import React from "react";
import "./About.css";
// import Aos from "aos";
import "aos/dist/aos.css";
import philani from "./phila.png";

import { FaUserGraduate } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { IoMdBuild } from "react-icons/io";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="About">
        <h3>About Me</h3>

        <div className="row thisone">
          <div className="col s12 m6">
            <img
              src={philani}
              className="hide-on-small-only "
              alt=""
              style={{ width: "100%", height: "650px" }}
            />
            <div className="bio">
              <p className="aboutId">Full Name: Philani Sithembiso Ndhlela</p>
              <p className="aboutId">Date of Birth: 1998-01-02</p>
              <p className="aboutId">Gender: Male</p>
              <p className="aboutId">Location(suburb): Parow/Cape Town</p>
              <p className="aboutId">Nationality: South African</p>
              <p className="aboutId">
                Willing to Relocate: <span className="red-text">YES</span> to
                Johannesburg, Pretoria, Durban, Bloemfontein
              </p>
              <p className="aboutId">
                Matric (year and school):2016/ Amadlelo Aluhlaza Secondary
                School
              </p>
            </div>
          </div>
          <div className="col s12 m6">
            <h3 className="headd">
              Just a simple dude who want to create awesome stuff -
            </h3>
            <p className="white-text one">
              <i>
                I am a problem solver who always stay focused until I achieve
                what I've set my mind to. I believe that failure is a stepping
                stone to everything I do, and always puts others first. I am a
                man of action and will always stay true to my words.I aspare to
                be a fullstack developer one day.
              </i>
            </p>
            <hr />
            <p className="white-text one">
              <i>
                I was inspired by film production in my early high school years
                since I was doing drama. Every day after school I use to go to
                the community youth centre to use the computers for researches
                and help the staff with typing document. So eventually, I got
                curious about what makes the computer to do what it does, that
                is how I fell in love with coding.
              </i>
            </p>
            <div className="row">
              <div className="col s12 m4">
                <div className="info">
                  <GiSoccerBall size="4rem" color="white" />
                  <h5 id="h5">
                    <strong>Hobbies</strong>
                  </h5>
                  <p>
                    singing in a choir,
                    <br />
                    spenging time with my debate team,
                    <br /> reading inspirational book and Acting. <br /> I love
                    being a team player.
                  </p>

                  <FaHeart size="2rem" color="red" />
                </div>
              </div>
              <div className="col s12 m4">
                <div className="work">
                  <IoMdBuild size="4rem" color="white" />
                  <h5>
                    <strong>Work Experience</strong>
                  </h5>

                  <p>
                    <strong>Company:</strong> Wimpy Resturant
                  </p>
                  <p>
                    <strong>Period:</strong> 2014-2019 (part-time)
                  </p>
                  <p>
                    <strong>Role:</strong> Waiter
                  </p>
                  <p>
                    <strong>Duties</strong>
                    <ul>
                      <li>working at the till,</li>
                      <li>taking and making orders for customers,</li>
                      <li>helping kids in the play room,</li>
                      <li>counting the stock helping the supervisor.</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="education">
                  <FaUserGraduate size="4rem" color="white" />
                  <h5>
                    <strong>Education </strong>
                  </h5>

                  <p>
                    <strong>Institution:</strong> University of
                    Johannesburg/2017
                  </p>
                  <p>
                    <strong>Course Name:</strong> Bsc in Informatics in Computer
                    Science
                  </p>
                  <p>
                    <strong>year:</strong> 2017 only
                  </p>
                  <hr />
                  <p>
                    <strong>Institution:</strong> Cape Peninsula University of
                    Technology
                  </p>
                  <p>
                    <strong>Course Name: </strong> Electrical (control systems)
                    Engineering
                  </p>
                  <p>
                    <strong>year: </strong> 2018-2019
                  </p>
                  <hr />
                  <p>
                    <strong>Insitution:</strong> LifeChoices Academy
                  </p>
                  <p>
                    <strong>Course:</strong> Software Engineering
                  </p>
                  <p>
                    <strong>year:</strong> 2020-currently
                  </p>
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
