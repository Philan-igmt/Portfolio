import React from 'react'
// import Aos from "aos";
// import "aos/dist/aos.css"
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import {FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }

    render(){
        const { status } = this.state;
    const social=[
            {value:<a className="tooltipped" data-position="bottom" data-tooltip="check myFacebook" href="https://www.facebook.com/philani.phila.7792"><FaFacebookSquare size="2rem" color="blue" /></a>,id:1},
            {value:<a className="tooltipped" data-position="bottom" data-tooltip="check myInstagram" href="https://www.instagram.com/philani_isithembiso/"><FaInstagramSquare size="2rem" color="brown" /></a>,id:2},
            {value:<a className="tooltipped" data-position="bottom" data-tooltip="check myTwitter" href="https://twitter.com/p_isthembiso"><FaTwitterSquare size="2rem" color="AQUA" /></a>,id:5},
            {value:<a className="tooltipped" data-position="bottom" data-tooltip="check myGithub" href="https://github.com/Philan-igmt"><FaGithubSquare size="2rem" color="white" /></a>,id:3},
            {value:<a className="tooltipped" data-position="bottom" data-tooltip="check myLinkedIn" href="https://www.linkedin.com/in/philani-sithembiso-270a391a5/"><FaLinkedin size="2rem" color="brown" /></a>,id:4}
        ];

        const display = social.map(name=>{
            return(
                <span key={name.id}>{name.value}</span>
            )

        })


    return (
        <div className="allcontact black white-text">
            <div className="row" style={{padding:"200px 0px"}}>
                <div className="col s12 center"><h2 data-aos="fade-up">Get In Touch</h2></div>
                <div className="col s12 m6">
                <div className="row center">
                        <form data-aos="fade-right" className="col s12"  action="https://formspree.io/mrgyykng" method="POST">
                        <div className="row">
                            <div className="input-field col s12 m6">
                            <i className="material-icons prefix">account_circle</i>
                            <input style={{color:"white"}} id="name" name="Name" type="text" required className="validate"/>
                            <label htmlFor="name">Name</label>
                            </div>
                           
                            <div className="input-field col s12 m6">
                            <i className="material-icons prefix">email</i>
                            <input style={{color:"white"}} id="email" type="email" name="email" required className="validate"/>
                            <label htmlFor="email">Email</label>
                            </div>
                
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">edit</i>
                            <input style={{color:"white"}} id="messege" type="text" name="messege" required className="validate"/>
                            <label htmlFor="messege">Messege</label>
                            </div>
                        </div>
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    </div>
                </div>
                <div className="col s12 m6" data-aos="fade-left">
                    <div className="row" style={{marginTop:"30px"}}>
                        <div className="col s12"><a href="mailto:philanisithembiso@gmail.com"><i className="material-icons left">email</i>philanisithembiso@gmail.com</a></div>
                        <div className="col s12"><a href="tel:+27761938834"><i className="material-icons left">phone</i>+27 76 193 8834</a></div>
                        <div className="col s12"><a href="https://www.google.com/maps/place/Toplin+House+contact/@-33.9052978,18.5888977,15z/data=!4m5!3m4!1s0x0:0x33631bba9afc7c03!8m2!3d-33.9052978!4d18.5888977"><i><i className="material-icons left">location_on</i>219 Voortrekker Rd, Glenlily, Cape Town, 7500</i></a></div>
                        <div id="icons" className="col s12 icons">{display}</div>
                    </div>
                </div>
            </div>
        </div>
    )


    }
    // submit 
    submitForm(ev){
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
    // submit
}
