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
          <h2>SKILLS</h2>
          <div className="skills-items">
            <div className="skill-item hidden">
              <h3></h3>
            </div>
            <div className="skill-item hidden">
              <h3></h3>
            </div>
            <div className="skill-item hidden">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
