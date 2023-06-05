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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              lectus vestibulum mattis ullamcorper. Euismod lacinia at quis
              risus sed vulputate odio ut enim. Faucibus purus in massa tempor.
              Iaculis eu non diam phasellus. Maecenas sed enim ut sem viverra.
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
