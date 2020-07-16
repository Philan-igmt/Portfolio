import React from "react";
import "./Project.css";
import Card from "./Card";

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
      link: "https://nervous-stonebraker-c62e7b.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
      name: "Recipe Website",
      id: 2,
    },
    {
      link: "https://nervous-stonebraker-c62e7b.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
      name: "Recipe Website",
      id: 3,
    },
    {
      link: "https://nervous-stonebraker-c62e7b.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
      name: "Recipe Website",
      id: 4,
    },
    {
      link: "https://nervous-stonebraker-c62e7b.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
      name: "Recipe Website",
      id: 5,
    },
  ];
  const list = projects.map((project) => (
    <div key={project.id}>
      <Card info={project} />
    </div>
  ));
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h3 data-aos="fade-up" className="center">
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
