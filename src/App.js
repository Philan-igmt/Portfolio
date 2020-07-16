import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Nav from "./components//navbar/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skill";
import Footer from "./components/footer/Footer";
import Parrallax from "./components/parallax/Parrallax";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Testi from "./components/testimonials/Testi";
import Projects from "./components/projects/Projects";
import Spring from "./components/skills/Spring";

const App = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Parrallax />
      <Services />
      <Parrallax />
      <Skills />
      <Projects />
      <Testi />
      {/* <Spring /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
