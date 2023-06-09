import React from "react";
import Fade from "react-reveal/Fade";
import Wave from "./Wave";
import ContactModel from "./ContactModel";

function Contact() {
  function addClass(event) {
    const el = event.target;
    el.classList.add("fa-solid");
  }

  function removeClass(event) {
    const el = event.target;
    el.classList.remove("fa-solid");
  }

  return (
    <section id="contact">
      <Wave waveClass="wave wave-second" styleClass="shape-fill" />
      <div className="container container-colour">
        <div className="contact">
          <div className="items-heading">
            <h2>CONTACT ME</h2>
            <span className="custom-span">- Let's get coffee together -</span>
          </div>
          <h1 className="contact-heading">Let's work together.</h1>

          <div className="contact-main">
            <Fade left>
              <div className="contact-main-left">
                <div className="contact-main-element">
                  <span>
                    <i
                      onMouseOver={addClass}
                      onMouseOut={removeClass}
                      className="fa-regular fa-envelope icon"
                    ></i>
                  </span>
                  <div className="contact-main-element-text">
                    <h3>Mail</h3>
                    <a href="mailto:jvkub.wojtkowski@gmail.com">
                      jvkub.wojtkowski@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-main-element">
                  <span>
                    <i
                      onMouseOver={addClass}
                      onMouseOut={removeClass}
                      className="fa-regular fa-map icon"
                    ></i>
                  </span>
                  <div className="contact-main-element-text">
                    <h3>Location</h3>
                    <p>Białystok, Poland</p>
                  </div>
                </div>

                <div className="contact-main-element">
                  <span>
                    <i
                      onMouseOver={addClass}
                      onMouseOut={removeClass}
                      className="fa-regular fa-file icon"
                    ></i>
                  </span>
                  <div className="contact-main-element-text">
                    <h3>CV</h3>
                    <button className="btn">
                      <i class="fa-solid fa-file"></i> Download CV
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="contact-main-right">
                <ContactModel />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
