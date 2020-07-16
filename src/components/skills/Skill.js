import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import "./Skills.css";
import Spring from "./Spring";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const sup = "%";
  const icons = [
    {
      name: <FaHtml5 color="red" size="5rem" />,
      id: 1,
      percentages: "90",
      des: "HTML5",
    },
    {
      name: <FaCss3Alt color="blue" size="5rem" />,
      id: 2,
      percentages: "60",
      des: "CSS3",
    },
    {
      name: <FaJs color="yellow" size="5rem" />,
      id: 6,
      percentages: "70",
      des: "JSCRIPT",
    },
    {
      name: <FaPython color="yellow" size="5rem" />,
      id: 3,
      percentages: "70",
      des: "PYTHON",
    },
    {
      name: <FaDatabase color="red" size="5rem" />,
      id: 4,
      percentages: "80",
      des: "MySQL",
    },
    {
      name: <FaReact color="Aqua" size="5rem" />,
      id: 5,
      percentages: "70",
      des: "REACT JS",
    },
    {
      name: <FaNodeJs color="green" size="5rem" />,
      id: 7,
      percentages: "50",
      des: "Node JS",
    },
  ];

  const iconss = icons.map((icon) => (
    <div key={icon.id}>
      <h3>{icon.des}</h3>
      <div>{icon.name}</div>
      <h3>
        {icon.percentages}
        <sup>{sup}</sup>
      </h3>
    </div>
  ));

  return (
    <div className="allSkill" id="skill" style={{ padding: "50px 0px" }}>
      <div>
        <h3 className="center" data-aos="fade-up">
          Skills
        </h3>
        <div
          data-aos="fade-up"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {iconss}
        </div>
      </div>
    </div>
  );
};

export default Skill;
