import React from "react";
import "./Project.css";

function Card({ info }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={info.image} style={{ height: "200px" }} />
        <span className="card-title">{info.name}</span>
      </div>
      <div className="card-action">
        <a className="btn red white-text" href={info.link}>
          click to check
        </a>
      </div>
    </div>
  );
}

export default Card;
