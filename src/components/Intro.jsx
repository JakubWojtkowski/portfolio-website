import React from "react";
import { useTypewriter } from "react-simple-typewriter";

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
      <div className="middle-container">
        <div className="intro">
          <div className="intro-items">
            <div className="intro-img">
            </div>
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
              <button className="btn">
                <i class="fa-solid fa-terminal"></i>View My Porfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
