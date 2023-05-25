import React, { useState } from "react";

function ProjectSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="projects-main">
      <div className="projects-slide">
        <div className="projects-slide-img">
          <img src={projects[currentIndex].image} alt="project-card" />
          <div className="left-arrow" onClick={goToPrevious}>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="right-arrow" onClick={goToNext}>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="projects-slide-text">
          <h3>{projects[currentIndex].name}</h3>
          <p>{projects[currentIndex].about}</p>
          <span>
            <a href={projects[currentIndex].link}>
              <i class="fa-brands fa-github"></i>
            </a>{" "}
            {projects[currentIndex].date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectSlider;
