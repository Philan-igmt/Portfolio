import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    const social = [
      {
        value: (
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="check myGithub"
            href="https://github.com/Philan-igmt"
          >
            <FaGithubSquare size="2rem" color="white" />
          </a>
        ),
        id: 3,
      },
      {
        value: (
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="check myLinkedIn"
            href="https://www.linkedin.com/in/philani-sithembiso-270a391a5/"
          >
            <FaLinkedin size="2rem" color="brown" />
          </a>
        ),
        id: 4,
      },
    ];

    const display = social.map((name) => {
      return <span key={name.id}>{name.value}</span>;
    });

    return (
      <div className="allcontact black white-text" id="contact">
        <div className="row" style={{ padding: "200px 0px" }}>
          <div className="col s12 center">
            <h2 data-aos="fade-up">Get In Touch</h2>
          </div>
          <div className="col s12 m6">
            <div className="row center">
              <form
                data-aos="fade-right"
                className="col s12"
                action="https://formspree.io/mrgyykng"
                method="POST"
                onSubmit={this.submitForm}
              >
                <div className="row" style={{ marginLeft: "20%" }}>
                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      style={{ color: "white" }}
                      id="name"
                      name="Name"
                      type="text"
                      required
                      className="validate"
                    />
                    <label htmlFor="name">Name</label>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">email</i>
                    <input
                      style={{ color: "white" }}
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="validate"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row" style={{ marginLeft: "20%" }}>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">edit</i>
                    <input
                      style={{ color: "white" }}
                      id="messege"
                      type="text"
                      name="messege"
                      required
                      className="validate"
                    />
                    <label htmlFor="messege">Message</label>
                  </div>
                </div>
                {status === "SUCCESS" ? (
                  <p>Thanks!</p>
                ) : (
                  <button className="btn red" style={{ marginLeft: "20%" }}>
                    Submit
                  </button>
                )}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
          <div className="col s12 m6" data-aos="fade-left">
            <div
              className="row right "
              style={{ marginTop: "90px", marginLeft: "20%" }}
            >
              <div className="col s12 ">
                <a href="mailto:philanisithembiso@gmail.com" target="_blank">
                  <i className="material-icons left">email</i>
                  philanisithembiso@gmail.com
                </a>
              </div>
              <div className="col s12">
                <a href="tel:+27761938834" target="_blank">
                  <i className="material-icons left">phone</i>+27 76 193 8834
                </a>
              </div>
              <div className="col s12">
                <a target="_blank">
                  <i className="material-icons left">location_on</i>
                  <i>Parow, Cape Town, 7500</i>
                </a>
              </div>
              <div id="icons" className="col s12">
                <p>{display}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // submit
  submitForm(ev) {
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
