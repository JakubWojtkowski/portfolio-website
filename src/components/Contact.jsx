import React from "react";
import Wave from "./Wave";

function Contact() {
  return (
    <section id="contact">
      <div className="middle-container">
        <Wave styleClass="shape-fill-second" />
        <div className="contact">
          <h2>Contact</h2>
          <div className="contact-form">
            <h1 className="contact-heading">Let's work together.</h1>
            <div className="contact-main">
              <span>
                <i className="fa-solid fa-location-dot" />
                Lorem ipsum
              </span>
              <span>
                <i className="fa-regular fa-envelope" />
                Lorem ipsum
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
