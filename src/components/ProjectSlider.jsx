import React, { useState } from "react";
import { usePrevious } from "@uidotdev/usehooks";

function ProjectSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = usePrevious(currentIndex);

  const goToPrevious = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? projects.length - 1 : currentIndex - 1;
    
    const activeDot = document.querySelector(".active");
    if (activeDot != null) activeDot.classList.remove("active");

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    const activeDot = document.querySelector(".active");
    if (activeDot != null) activeDot.classList.remove("active");

    setCurrentIndex(newIndex);
  };

  const goToSlide = (e, index) => {
    const activeDot = document.querySelector(".active");
    if (activeDot != null) activeDot.classList.remove("active");
    e.target.classList.add("active");

    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="projects-main">
        <div className="projects-main-img">
          <img src={projects[currentIndex].image} alt="project-card" />
          <div className="left-arrow" onClick={goToPrevious}>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="right-arrow" onClick={goToNext}>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="projects-main-text">
          <h3>{projects[currentIndex].name}</h3>
          <span>
            <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noreferrer"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className={projects[currentIndex].icon}
              ></i>
            </a>{" "}
            {projects[currentIndex].date}
          </span>
        </div>
      </div>
      <div className="projects-main-dots">
        {projects.map((project, index) => {
          return (
            <div
              className="projects-main-dot"
              key={index}
              id={index}
              onClick={(e) => goToSlide(e, index)}
            >
              •
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSlider;
