import React from "react";
import "./Project.css";
import Card from "./Card";
import gf from "./gf.jpeg";
import ck from "./CK.jpeg";

const Projects = () => {
  const projects = [
    {
      link: "https://nervous-stonebraker-c62e7b.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
      name: "Recipe Website",
      id: 1,
    },
    {
      link: "https://brave-carson-146e9d.netlify.app/",
      image: gf,
      name: "Github Finder",
      id: 2,
    },
    {
      link: "https://nameless-earth-13556.herokuapp.com/login",
      name: "Contacts Keeper",
      image: ck,
      id: 3,
    },
  ];
  const list = projects.map((project) => (
    <div key={project.id}>
      <Card info={project} />
    </div>
  ));
  return (
    <div id="project" style={{ backgroundColor: "black", color: "white" }}>
      <h3 data-aos="fade-up" className="h3">
        My Work
      </h3>
      <div
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {list}
      </div>
    </div>
  );
};

export default Projects;
