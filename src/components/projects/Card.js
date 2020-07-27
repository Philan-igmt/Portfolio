import React from "react";
import "./Project.css";

function Card({ info }) {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `${info.image}` }}>
        <img src={info.image} style={{ height: "200px" }} alt="" />
        <div className="hoverdiv">
          <p>{info.paragraph}</p>

          <div className="crad-content">
            <span className="card-title">{info.name}</span>
          </div>
          <div className="card-action">
            <a
              className="btn red white-text left"
              href={info.link}
              target="_blank"
            >
              click to check
            </a>
            <a
              className="btn red white-text right blue"
              href={info.Github}
              target="_blank"
            >
              GitHub Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
