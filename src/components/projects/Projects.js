import React from "react";
import "./Project.css";

const Projects = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h3 data-aos="fade-up" className="center">
        My Work
      </h3>
      <div className="center" style={{ marginLeft: "20px" }}>
        <h4 className="project">
          RECIPE-APP
          <a
            className="pulse"
            target="_blank"
            href="https://nervous-stonebraker-c62e7b.netlify.app/"
          >
            check
          </a>
        </h4>
        <img
          style={{ border: "2px solid red" }}
          className="project"
          data-aos="fade-up"
          src="https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg"
          alt=""
          width="100px"
          height="200px"
        />
      </div>
    </div>
  );
};

export default Projects;
