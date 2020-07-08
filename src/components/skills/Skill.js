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
  {name:<FaHtml5 color="red" size="5rem"/>,id:1},
  {name:<FaCss3Alt color="blue" size="5rem"/>,id:2},
  {name:< FaJs color="yellow" size="5rem"/> ,id:6 },
  {name:<FaPython color="yellow" size="5rem"/>,id:3},
  {name:<FaDatabase color="red" size="5rem"/>,id:4},
  {name:<FaReact color="Aqua" size="5rem"/>,id:5}

]

const items = icons.map(icon=>{
  return(
  <span key={icon.id}>{icon.name}</span>
  )
})

    return (
      <div className="allSkill">
        <div data-aos="fade-up">
          <h2 className="head" style={{display:"flex",justifyContent:"center",width:"100%"}}>Skills</h2>
          <div style={{display:"flex",justifyContent:"center"}}>
            <span>{items}</span>
        </div>
        </div>
</div>
    )
    
}

export default Skill;