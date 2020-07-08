import React, { useState } from "react";
import coding from "./coding.jpg";
import "./Parallax.css";

const Parrallax = () => {
  const [para1] = useState(
    <div className="parallax-container">
      <div className="parallax">
        <img src={coding} alt="" />
      </div>
    </div>
  );
  return <div>{para1}</div>;
};

export default Parrallax;
