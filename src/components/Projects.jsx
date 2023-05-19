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
              <div className="project-item-main-text">
                <h3>Project 1</h3>
                <p>Lorem ipsum ...</p>
                <a href="https://github.com/JakubWojtkowski">
                  See code <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="project-item-main-img">
                <img src="https://images.pexels.com/photos/16849712/pexels-photo-16849712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="temp"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
