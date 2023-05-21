import React from "react";
import Wave from "./Wave";

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
      <div className="middle-container">
        <Wave waveClass="wave" styleClass="shape-fill-second" />
        <div className="contact">
          <h2>Contact me</h2>
          <h1 className="contact-heading">Let's work together.</h1>

          <div className="contact-main">
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

            <div className="contact-main-right">
              <img
                style={{ width: "100%" }}
                src="https://www.dreamztech.com.my/images/1_Dreamztech/career/programmers.png"
                alt="temp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
