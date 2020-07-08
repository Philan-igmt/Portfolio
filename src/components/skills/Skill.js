import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import { FaHtml5} from "react-icons/fa";
import { FaCss3Alt} from "react-icons/fa";
import { FaJs} from "react-icons/fa";
import { FaPython} from "react-icons/fa";
import { FaDatabase} from "react-icons/fa";
import { FaReact} from "react-icons/fa";
import "./Skills.css"

const Skill = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
      <div className="allSkill">
        <div data-aos="fade-up">
          <h2>Skills</h2>
            <div className="container">
              
                <div className="html">
                  {/* still have to change this to be a usable component */}
                  {/* instead of the hard coded numbers I will put the count function */}
                <span><FaHtml5 color="red" size="4rem"/></span><h5>HTML</h5><h3>90<sup>%</sup></h3>
                </div>
                <div className="html">
                <span><FaCss3Alt color="blue" size="4rem"/></span><h5>CSS</h5><h3>90<sup>%</sup></h3>
                </div>
                <div className="html">
                <span>< FaJs color="yellow" size="4rem"/></span><h5>JAVASCRIPT</h5><h3>90<sup>%</sup></h3>
                </div>
                <div className="html">
                <span><FaPython color="yellow" size="4rem"/></span><h5>PYTHON</h5><h3>90<sup>%</sup></h3>
                </div>
                <div className="html">
                <span><FaDatabase color="red" size="4rem"/></span><h5>DATABASES</h5><h3>90<sup>%</sup></h3>
                </div>
                <div className="html">
                <span><FaReact color="Aqua" size="4rem"/></span><h5>REACTJS</h5><h3>90<sup>%</sup></h3>
                </div>
        </div>
        </div>
</div>
    )
    
}

export default Skill;