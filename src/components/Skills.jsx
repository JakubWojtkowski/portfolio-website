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
          <h2 >SKILLS</h2>
          <span style={{paddingBottom: "20px"}}>- An overview of my Technical Skills -</span>
          <div className="skills-items">
            <div className="skill-item-card hidden">
              <h3>Front-end</h3>
              <div className="skill-item-card-box">
                <div className="skill-item-card-box-element">
                  <i class="fa-brands fa-js"></i>
                  <p>Javascript</p>
                  <span>Intermediate</span>
                </div>
                <div className="skill-item-card-box-element">
                  <i class="fa-brands fa-react"></i>
                  <p>React.js</p>
                  <span>Basic</span>
                </div>
                <div className="skill-item-card-box-element">
                  <i class="fa-brands fa-html5"></i>
                  <p>HTML</p>
                  <span>Intermediate</span>
                </div>
                <div className="skill-item-card-box-element">
                  <i class="fa-brands fa-css3-alt"></i>
                  <p>CSS</p>
                  <span>Intermediate</span>
                </div>
                <div className="skill-item-card-box-element">
                  <i class="fa-brands fa-bootstrap"></i>
                  <p>Bootstrap</p>
                  <span>Basic</span>
                </div>
                <div className="skill-item-card-box-element">
                  <i class="fa-brands fa-git-alt"></i>
                  <p>Git</p>
                  <span>Basic</span>
                </div>
              </div>
            </div>
            <div className="skill-item-card hidden">
              <h3>Back-end</h3>
              <div className="skill-item-card-box">
                <div className="skill-item-card-box-element">
                  <i class="fa-brands fa-node"></i>
                  <p>Node.js</p>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
