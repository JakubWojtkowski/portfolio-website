import React from "react";
import infromations from "../informations.json";
import Wave from "./Wave";

function About() {
  return (
    <section id="about">
      <div class="container">
        <Wave waveClass="wave" styleClass="shape-fill-first" />
        <div className="about">
          <div className="about-items">
            <div className="items-heading">
              <h2>ABOUT ME</h2>
              <span className="custom-span">- Something about me -</span>
            </div>

            <div className="about-img-parent">
              <img
                src="./images/me.jpeg"
                alt="about me img"
                className="about-img"
              />
            </div>
            <p className="about-text">
              My journey as a web developer began with a strong fascination for
              technology and a desire to bring ideas to life in the digital
              realm. Over the years, I have honed my skills in HTML, CSS,
              JavaScript, and various front-end and back-end frameworks, allowing me to build
              responsive and dynamic websites that adapt seamlessly to different
              devices and platforms.
            </p>

            <div className="about-text-data">
              {infromations.map((el) => {
                return (
                  <div className="about-text-data-item" key={el.id}>
                    {el.property} <span>{el.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
