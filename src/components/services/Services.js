import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import "./Services.css"
import {FaPaintBrush} from 'react-icons/fa';
import {FaLaptopCode} from 'react-icons/fa';
import {FaMobileAlt} from 'react-icons/fa';


const Services = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <div className="allserv" id="service">
            <div><h2 className="center-align head" data-aos="fade-up">Services</h2></div>
            <div className="container">
              
            <div className="row">
                <div className="col s12 m4" data-aos="fade-right">
                    <h3>Web <br/> design</h3>
                    <span><FaPaintBrush size="4rem" color="black"/></span>
                    <p>Imagination is the most powerful tool of the mind</p> 
                                        
                </div>
                <div className="col s12 m4" data-aos="fade-up">
                    <h3>Web Development</h3>
                    <span><FaLaptopCode size="4rem" color="black"/></span>
                    <p>Full-stack Developer</p> 
                </div>
                <div className="col s12 m4" data-aos="fade-left">
                    <h3>App Development</h3>
                    <span><FaMobileAlt size="4rem" color="black"/></span>
                    <p>Building Native APP</p> 
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services;