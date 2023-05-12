import React from "react";

function Nav() {
  return (
    <section id="home">
      <div className="container">
        <nav className="nav-bar">
          <h3 className="logo">wojtko.dev</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Nav;
