import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Wave from "./Wave";

function Intro() {
  const [text] = useTypewriter({
    words: [
      "Book Reader...",
      "Front-end Developer...",
      "Fullstack Developer...",
      "Jakub Wojtkowski.",
    ],
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 500,
  });

  return (
    <section id="intro">
      <div className="container container-colour">
        <div className="intro">
          <div className="intro-items">
            <div className="intro-img"></div>
            <div className="intro-text">
              <h1 className="intro-text-heading">
                Web
                <br /> Developer.
              </h1>
              <span className="intro-text-type">- {text}</span>
              <p>
                Hello <span style={{ fontSize: "1.25rem" }}>👋🏼 </span>
                I'm a passionate about creating awesome websites that make
                people happy and catch the eye.
              </p>
              <div className="intro-text-btn">
                <button className="btn">
                  <i class="fa-solid fa-terminal"></i>
                  <a
                    href="#projects"
                    style={{ color: "#f9f9f9", padding: "0" }}
                  >
                    View My Projects
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Wave waveClass="wave" styleClass="shape-fill-second" />
      </div>
    </section>
  );
}

export default Intro;
