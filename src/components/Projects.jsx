import React from "react";
import Wave from "./Wave";
import ProjectSlider from "./ProjectSlider";
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
          <ProjectSlider projects={projects} />
        </div>
      </div>
      <Wave waveClass="wave" styleClass="shape-fill-first" />
    </section>
  );
}

export default Projects;
