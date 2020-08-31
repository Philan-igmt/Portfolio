import React from "react";
import "./Project.css";
import Card from "./Card";
import gf from "./gf.jpeg";
import ck from "./CK.jpeg";
import final from "./final.png";

const Projects = () => {
  const projects = [
    {
      link: "https://nervous-stonebraker-c62e7b.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
      name: "Recipe Website",
      id: 1,
      Github: "https://github.com/Philan-igmt/Recepe",
      paragraph:
        "you can use this Web-App to search for a recipes, built with REACT JS AND EDAMEM API",
    },
    {
      link: "https://brave-carson-146e9d.netlify.app/",
      image: gf,
      name: "Github Finder",
      id: 2,
      Github: "https://github.com/Philan-igmt/github-finder",
      paragraph:
        "you can use this Web-App to search any GITHUB user,check their repositories and their profiles, built in REACT JS and AND GITHUB API",
    },
    {
      link: "https://nameless-earth-13556.herokuapp.com/login",
      name: "Contacts Keeper",
      image: ck,
      id: 3,
      Github: "https://github.com/Philan-igmt/ContactKeeper",
      paragraph:
        "you can use this Web-App store contacts online, built with REACT JS AND Node & Express Back-end",
    },
    {
      link: "https://nameless-earth-13556.herokuapp.com/login",
      name: "Books e-commerce",
      image: final,
      id: 3,
      Github: "https://github.com/Philan-igmt/finaldeploy.git",
      paragraph:
        "Front-to-Back end ecormece website to show my full stack skills, built in REACT JS, MONGODB and NODE & EXPRESS",
    },
  ];
  const list = projects.map((project) => (
    <div key={project.id}>
      <Card info={project} />
    </div>
  ));
  return (
    <div id="project" style={{ backgroundColor: "black", color: "white" }}>
      <h3 className="h3">My Projects</h3>
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
