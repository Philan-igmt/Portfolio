import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <div>
            <h2 data-aos="fade-down">Get In Touch</h2>
            <div className="row">
                {/* the left side */}
                <div className="col s12 l6">
                    {/* row start */}
                <form  data-aos="fade-right">
                    <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">Name</label>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                        <input id="last_name" type="email" className="validate"/>
                        <label htmlFor="last_name">Email</label>
                        </div>
                    </div>
                    {/* row end */}

                    {/* second row start */}
                    <div className="row">
                        
                        <div className="row">
                            <div className="input-field col s12 l12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                            <label htmlFor="icon_prefix2">First Name</label>
                            </div>
                        </div>
                       
                    </div>
                     
                    </form>
                </div>
                {/* second row end */}


                {/* the right side */}
                <div  data-aos="fade-left">
                    <div style={{marginTop:"20px"}} className="col s12 l6">
                   <a href="mailto:philanisithembiso"><i className="material-icons left">email</i>philanisithembiso@gmail.com</a>
                </div>
                <div style={{marginTop:"20px"}} className="col s12 l6">
                   <a href="tel:+27761938"><i className="material-icons left">phone</i>+27 76 193 8834</a>
                </div>
                <div style={{marginTop:"20px"}} className="col s12 l6">
                   <a href="https://www.google.com/maps/place/Toplin+House+contact/@-33.9052978,18.5888977,15z/data=!4m5!3m4!1s0x0:0x33631bba9afc7c03!8m2!3d-33.9052978!4d18.5888977"><i className="material-icons left">location_on</i><i>219 Voortrekker Rd, Glenlily, Cape Town, 7500</i></a>
                </div>
                
                </div>
                
             
            </div>
        </div>
    )
}

export default Contact;