import React, { useEffect } from "react";
import skills from "../skills.json";
import Wave from "./Wave";

function Skills() {
  function showSkills() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
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
      <div class="middle-container">
        <Wave waveClass="wave" styleClass="shape-fill-second" />
        <div className="skills">
          <h2>SKILLS</h2>
          <span className="custom-span">
            - An overview of my Technical Skills -
          </span>
          <div className="skills-items">
            <div className="skill-item-card hidden">
              <h3>Front-end</h3>
              <div className="skill-item-card-box">
                {skills.frontend.map((skill, index) => {
                  return (
                    <div className="skill-item-card-box-element" key={skill.id}>
                      <i className={skill.icon}></i>
                      <p>{skill.name}</p>
                      <span>{skill.level}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="skill-item-card hidden">
              <h3>Back-end</h3>
              <div className="skill-item-card-box">
                {skills.backend.map((skill) => {
                  return (
                    <div className="skill-item-card-box-element" key={skill.id}>
                      <i className={skill.icon}></i>
                      <p>{skill.name}</p>
                      <span>{skill.level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
