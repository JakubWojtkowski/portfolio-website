import React from "react";
import ProjectSlider from "./ProjectSlider";
import projects from "../projects.json";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects">
          <div className="items-heading">
            <h2>PROJECTS</h2>
            <span className="custom-span">- Some of my bigger projects -</span>
          </div>
          <div className="projects-items">
            <ProjectSlider projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
