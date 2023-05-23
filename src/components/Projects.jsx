import React from "react";
import Wave from "./Wave";
import projects from "../projects.json";

function Projects() {
  return (
    <section id="projects">
      <div className="middle-container">
        <div className="projects">
          <h2>PROJECTS</h2>
          <span className="custom-span">
            - Below are some of my bigger projects -
          </span>
          <div className="projects-item">
            {projects.map((project) => {
              return (
                <div className="project-item-element">
                  <div className="project-item-main-img">
                    <img src={project.image} alt="project view" />
                  </div>
                  <div className="project-item-main-text">
                    <h4>{project.name}</h4>
                    <p>{project.about}</p>
                    <a href={project.link} rel="noreferrer" target="_blank">
                      <i className="fa-brands fa-github icon"></i>
                    </a>
                    <span>{project.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Wave waveClass="wave" styleClass="shape-fill-first" />
    </section>
  );
}

export default Projects;
