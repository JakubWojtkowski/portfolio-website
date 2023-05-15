import React, { useEffect } from "react";

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
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-items">
            <div className="skill-item hidden">
              <img src="https://media.giphy.com/media/8ah1D978pNLT8bUC5s/giphy.gif" alt="img" />
            </div>
            <div className="skill-item hidden">
              <img src="https://media.giphy.com/media/8ah1D978pNLT8bUC5s/giphy.gif" alt="img" />
            </div>
            <div className="skill-item hidden">
              <img src="https://media.giphy.com/media/8ah1D978pNLT8bUC5s/giphy.gif" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
