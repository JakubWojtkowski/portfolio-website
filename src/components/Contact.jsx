import React from "react";
import Wave from "./Wave";

function Contact() {
  return (
    <section id="contact">
      <div className="middle-container">
        <Wave styleClass="shape-fill-second" />
        <div className="contact">
          <h2>Contact</h2>
          <div className="contact-main">
            <h1 className="contact-heading">Let's work together.</h1>
            <div className="contact-form">
              <div className="contact-form-left">
                <form className="form">
                  <input
                    className="form-element"
                    autoComplete="off"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    className="form-element"
                    autoComplete="off"
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                  />
                  <textarea
                    rows={6}
                    className="form-element"
                    required
                  ></textarea>
                  <button type="submit" className="btn">
                    Send <i class="fa-regular fa-paper-plane"></i>
                  </button>
                </form>
              </div>
              <div className="contact-form-right">
                <h3>right sect</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
