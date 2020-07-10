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
// import {BrowserRouter,Switch, Route} from "react-router-dom";
// import Skill from "./components/skills/Skill";



const App = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    
      // <BrowserRouter>
      <div className="App">
         <Nav />
        {/*<Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/services" component={Services}/>
        <Route path="/skill" component={Skill}/>
        <Route path="/testimonials" component={Testi}/>
        <Route path="/contact" component={Footer}/> */}

        <Home />
        <About />
        <Parrallax />
        <Services/>
        <Parrallax />
        <Skills />
        <Projects/>
        <Testi/>  
        <Contact/>
        <Footer />
        </div>
      // </BrowserRouter>
      
    
  );
};

export default App;
