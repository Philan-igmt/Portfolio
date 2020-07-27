import React from "react";
import "./Testi.css";
import godwin from "./images/Godwin.jpg";
import jason from "./images/jason.jpeg";
import ganief from "./images/ganief.jpg";
import yonela from "./images/yonela.jpeg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Testi = () => {
  const data = [
    {
      name: "Godwin Dzvapatsva (Head of Curriculum and Learning)",
      id: 1,
      image: godwin,
      quote: `Over the period that I knew Philani, he is someone who is very respectful and confident about his programming work. I found him easy to work with. I recommend Philani without any reservations`,
      icon: <FaQuoteLeft size="1rem" color="white" />,
      iconr: <FaQuoteRight size="1rem" color="white" />,
    },
    {
      name: "Jason (Lecturer)",
      id: 2,
      image: jason,
      quote:
        "Philani is a born an bred team player, and developer, who shows joy in what he creates.",
      icon: <FaQuoteLeft size="1rem" color="white" />,
      iconr: <FaQuoteRight size="1rem" color="white" />,
    },
    {
      name: "Yonela Ntsangani( friend / collegue)",
      id: 4,
      image: yonela,
      quote:
        "Philani is humble, charismatic and confident. His passion and dedication for his work is truly remarkable and encouraging. It would be a great honor to have him on board.",
      icon: <FaQuoteLeft size="1rem" color="white" />,
      iconr: <FaQuoteRight size="1rem" color="white" />,
    },
    {
      name: "Moegamat Ganief Carloo ( friend / collegue)",
      id: 3,
      image: ganief,
      quote:
        "Philani is persistant.He always tries his best and is dependable. He is able to adapt quickly and shows dedication to his work",
      icon: <FaQuoteLeft size="1rem" color="white" />,
      iconr: <FaQuoteRight size="1rem" color="white" />,
    },
  ];

  const people = data.map((person) => {
    return (
      <div data-aos="fade-up" key={person.id}>
        <div className="card" id="card">
          <div className="card-image">
            <img src={person.image} alt="" height="200px" />
          </div>
          <div className="card-content">
            <h6 style={{ marginTop: "0px" }} className="card-title yellow-text">
              {person.name}
            </h6>
            <p>
              {person.icon}
              {person.quote}
              {person.iconr}
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="black white-text" id="testi">
      <div className="center">
        <h3 className="testihead">My Happy Collegues</h3>
      </div>
      <div className="tesimonials white-text">{people}</div>
    </div>
  );
};

export default Testi;
