import React from "react";
import Wave from "./Wave";

function Projects() {
  return (
    <section id="projects">
      <div className="middle-container">
        <Wave styleClass="shape-fill-first" />
        <div className="projects">
          <h2>Projects</h2>
          <div className="projects-item">
            <div className="project-item-main">
              <div className="project-item-text">
                <h3>Project 1</h3>
                <p>Lorem ipsum ...</p>
                <a href="https://github.com/JakubWojtkowski">
                  See code <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="project-item-img">
                <h3>img</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
