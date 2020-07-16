import React from "react";
import "./About.css";
// import Aos from "aos";
import "aos/dist/aos.css";
import philani from "./croped.jpg";
// import { FaInfo } from "react-icons/fa";
// import { FaBasketballBall } from "react-icons/fa";
// import { FaFilm } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa";
import cv from "./cv.docx";
// import { FaRegCalendarAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" data-aos="fade-up" id="about">
      <div className="About">
        <h3>About Me</h3>
        <p className="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          assumenda dicta, iste delectus illo ipsam autem totam nostrum. Odit
          magnam incidunt a voluptatem? Beatae nemo, adipisci placeat eius, in
          alias libero deleniti et atque, temporibus quidem fugiat sunt
          voluptate. Sequi doloremque blanditiis illum labore, totam quasi nobis
          tempora officiis nostrum neque corporis sed eveniet sunt enim, ullam
          impedit. Necessitatibus et cumque exercitationem quod enim deleniti,
          similique laudantium incidunt laborum harum aliquid possimus iusto,
          aperiam, maxime voluptatibus voluptate cupiditate expedita nulla
          eligendi esse voluptatem. Reprehenderit officiis hic eveniet facilis
          assumenda vel corporis voluptatibus magni quam molestias vero
          delectus, accusamus repudiandae. Consectetur error est saepe nesciunt,
          autem ducimus placeat! Nihil magnam hic quis repellat veniam
          repudiandae iste. Ad, laudantium ex autem amet culpa magni laboriosam
          hic voluptatum, libero cupiditate esse a suscipit similique sequi
          voluptas enim nihil! Nemo quia reprehenderit amet beatae quod
          architecto fugiat neque doloremque est dolore autem minima possimus
          repellat nisi, fugit molestias minus doloribus quae. Laborum, quae
          eveniet eum officiis tenetur debitis, praesentium reiciendis mollitia
          est aut dolorem, quisquam dolor repellat earum obcaecati totam
          asperiores molestiae perferendis error numquam assumenda incidunt a!
          Excepturi, consequatur. Laboriosam, quaerat accusantium esse
          cupiditate explicabo, et nostrum itaque voluptatum dicta similique
          asperiores adipisci.
        </p>
        <img className="me" src={philani} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          consequatur est iusto quia at quas natus reiciendis facere tempora
          nemo, illo vero quo eius molestias blanditiis assumenda perspiciatis
          fugiat nihil cumque dolorum ea? Aperiam, maxime aspernatur! Labore
          natus iusto quis amet distinctio harum, aliquam, iste sunt sed officia
          at quam adipisci, sequi modi voluptatum possimus quidem esse
          reiciendis vel illo nam sint autem temporibus? Facere labore sunt
          magnam corporis rem saepe, quas necessitatibus vel rerum animi at
          accusamus non consequatur! Adipisci quasi, excepturi dicta alias
          minima eius minus magnam ratione suscipit corrupti exercitationem
          cupiditate voluptas ipsa, praesentium cum eum vero!
        </p>
      </div>
    </div>
  );
};

export default About;
