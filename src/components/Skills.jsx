import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import skills from "../skills.json";
import Wave from "./Wave";

function Skills() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  function showSkills() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenSkills = document.querySelectorAll(".hidden");
    hiddenSkills.forEach((skill) => observer.observe(skill));
  }

  useEffect(() => {
    showSkills();
  }, []);

  return (
    <section id="skills">
      <Wave waveClass="wave wave-second" styleClass="shape-fill" />
      <div class="container container-colour">
        <div className="skills">
          <div className="items-heading">
            <h2>SKILLS</h2>
            <span className="custom-span">
              - An overview of my Technical Skills -
            </span>
          </div>
          <div className="skills-items">
            <Tilt options={defaultOptions}>
              <div className="skill-item-card hidden">
                <h3>Front-end</h3>
                <div className="skill-item-card-box">
                  {skills.frontend.map((skill, index) => {
                    return (
                      <div
                        className="skill-item-card-box-element"
                        key={skill.id}
                      >
                        <img
                          className="icon-img"
                          src={skill.icon}
                          alt="tech stack logo"
                        />
                        <p>{skill.name}</p>
                        <span className="skill-level">- {skill.level} -</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tilt>

            <Tilt options={defaultOptions}>
              <div className="skill-item-card hidden">
                <h3>Back-end</h3>
                <div className="skill-item-card-box">
                  {skills.backend.map((skill) => {
                    return (
                      <div
                        className="skill-item-card-box-element"
                        key={skill.id}
                      >
                        <img
                          className="icon-img"
                          src={skill.icon}
                          alt="tech stack logo"
                        />
                        <p>{skill.name}</p>
                        <span className="skill-level">- {skill.level} -</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <Wave waveClass="wave" styleClass="shape-fill" />
    </section>
  );
}

export default Skills;
