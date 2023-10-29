import React from "react";
import infromations from "../informations.json";

function About() {
  return (
    <section id="about">
      <div class="container">
        <div className="about">
          <div className="about-items">
            <div className="items-heading">
              <h2>ABOUT ME</h2>
              <span className="custom-span">- Something about me -</span>
            </div>

            <div className="about-img-parent"></div>
            <p className="about-text">
              My journey as a<b> full-stack developer </b>began with a strong
              fascination for technology and a desire to bring<b> ideas</b> to
              life in the digital realm. Over the years, I have honed my skills
              in <b>HTML</b>, <b>CSS</b>,<b> JavaScript</b>, and various{" "}
              <b>front-end</b> and <b>back-end</b> frameworks, allowing me to
              build <b>responsive</b> and dynamic websites that adapt seamlessly
              to different <b>devices</b> and <b>platforms</b>.
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
