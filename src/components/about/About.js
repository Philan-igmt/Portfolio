import React from "react";
import "./About.css";
// import Aos from "aos";
import "aos/dist/aos.css"
import philani from "./philani.png"
import { FaBaby} from "react-icons/fa";
import { FaBasketballBall} from "react-icons/fa";
import { FaFilm} from "react-icons/fa";
// import { FaFilm} from "react-icons/fa";
// import { FaFilm} from "react-icons/fa";

const About = () => {
  return (
    <div className="about" data-aos="fade-up">
      <h2 id="heading" style={{padding:"50px"}}>About Me</h2>
      <div className="row">
      <div className="col s12 l12">
        <div className="card horizontal">
          <div className="card-image">
            <img src={philani} alt="cool"/>
            <a href="https://docs.google.com/document/d/1VWFcrQyO2TAVHfWEdT9sZ6S6Ij0fzVLuqqrsWjJEpto/edit" className="btn red">DOWNLOAD MY CV</a>
          </div>
          <div className="card-stacked">
            <div className="card-content">
            <ul className="collapsible">
                <li>
                  <div className="collapsible-header"><FaBaby color="Turquoise" size="4rem"/>Childhood</div>
                  <div className="collapsible-body">
                    
                  
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><FaBasketballBall color="black" size="4rem"/>Hobbies</div>
                  <div className="collapsible-body">
                    <p><span><FaFilm color="black" size="2rem"  /></span> <span style={{color:"red"}}>Acting</span> -I was doing drama in High School</p>
                    <p><FaBasketballBall color="black" size="2rem"/><span style={{color:"red"}}>Soccer</span>-I was playing for Cape Peninsula University of Technology first team in 2018,19</p>
                    <p><FaBasketballBall color="black" size="2rem"/><span style={{color:"red"}}>Debate</span>these was my part time activity when I was curious about some,some debate team just bring all that to live</p>
                    <p><FaBasketballBall color="black" size="2rem"/>Singing</p>
                    </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
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
