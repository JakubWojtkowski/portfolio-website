import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function Intro() {
  const [text] = useTypewriter({
    words: ["Front-end Developer", "Back-end Developer", "Jakub Wojtkowski"],
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <section>
    <div className="intro">
      <div className="intro-img">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.-P26n7StwhLOYZjEjB7xagAAAA&pid=Api"
          alt="me"
        ></img>
      </div>
      <div className="intro-text">
        <h1>
          Web
          <br /> Developer.
        </h1>
        <p>
          Hello <span style={{ fontSize: "2rem" }}>👋🏼</span>. I'm{" "}
          <span className="intro-text-type">{text}</span>.<br />A passionate
          about creating websites that make people happy and catch the eye.
        </p>
        <button className="intro-btn">
          <i class="fa-solid fa-terminal"></i> View My Porfolio{" "}
        </button>
      </div>
    </div>
    </section>
  );
}

export default Intro;
