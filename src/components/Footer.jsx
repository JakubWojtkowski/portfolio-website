import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h3>Copyright © wojtko 2023</h3>
      <div className="footer-socials">
        <a target="_blank" rel="noreferrer" href="https://github.com/JakubWojtkowski">
          <i className="fa-brands fa-github" style={{color: "#000"}}></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jakub-wojtkowski-1aab37275/">
          <i className="fa-brands fa-linkedin" style={{color: "#538ef3"}}></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
