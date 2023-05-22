import React from "react";
import Wave from "./Wave";

function Projects() {
  return (
    <section id="projects">
      <div className="middle-container">
        <div className="projects">
          <h2>PROJECTS</h2>
          <div className="projects-item hidden-y">
            <div className="project-item-element">
              <div className="project-item-main-img">
                <img
                  src="https://images.pexels.com/photos/16849712/pexels-photo-16849712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="temp"
                />
              </div>
              <div className="project-item-main-text">
                <h3>This is project card</h3>
                <a href="https://github.com/JakubWojtkowski">
                  See code <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="project-item-element">
              <div className="project-item-main-img">
                <img
                  src="https://images.pexels.com/photos/16849712/pexels-photo-16849712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="temp"
                />
              </div>
              <div className="project-item-main-text">
                <h3>This is project card</h3>

                <a href="https://github.com/JakubWojtkowski">
                  See code <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="project-item-element">
              <div className="project-item-main-img">
                <img
                  src="https://images.pexels.com/photos/16849712/pexels-photo-16849712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="temp"
                />
              </div>
              <div className="project-item-main-text">
                <h3>This is project card</h3>
                <a href="https://github.com/JakubWojtkowski">
                  See code <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave waveClass="wave" styleClass="shape-fill-first" />
    </section>
  );
}

export default Projects;
