import React from "react";
import infromations from "../informations.json";
import Wave from "./Wave";

function About() {
  return (
    <section id="about">
      <div class="middle-container">
        <Wave styleClass="shape-fill-first"/>
        <div className="about">
          <h2>ABOUT ME</h2>
          <img
            src="https://media.giphy.com/media/8ah1D978pNLT8bUC5s/giphy.gif"
            alt="about me img"
            className="about-img"
          />
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            lectus vestibulum mattis ullamcorper. Euismod lacinia at quis risus
            sed vulputate odio ut enim. Faucibus purus in massa tempor. Iaculis
            eu non diam phasellus. Maecenas sed enim ut sem viverra.
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
    </section>
  );
}

export default About;
