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

const icons =[
  {name:<FaHtml5 color="red" size="5rem"/>,id:1,lang:"90%"},
  {name:<FaCss3Alt color="blue" size="5rem"/>,id:2,lang:"70%"},
  {name:< FaJs color="yellow" size="5rem"/> ,id:6 ,lang:"70%"},
  {name:<FaPython color="yellow" size="5rem"/>,id:3 ,lang:"70%"},
  {name:<FaDatabase color="red" size="5rem"/>,id:4 ,lang:"80%"},
  {name:<FaReact color="Aqua" size="5rem"/>,id:5 ,lang:"70%"}

]

const items = icons.map(icon=><span style={{margin:"0px 50px"}} key={icon.id}>{icon.name}<span style={{fontSize:"2rem"}}> {icon.lang}</span> </span>)

    return (
      <div className="allSkill" id="skill"  style={{padding:"50px 0px"}}>
        <div>
          <h2 className="center" data-aos="fade-up">Skills</h2>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <p data-aos="fade-up">{items}</p>   
          </div>
        </div>
      </div>
    )
    
}

export default Skill;