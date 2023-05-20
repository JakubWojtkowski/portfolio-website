import React, { useState } from "react";

function Nav() {
  const [iconClass, setIconClass] = useState("fa-solid fa-bars");

  return (
    <section id="home">
      <nav className="nav-bar">
        <h3 className="logo">wojtko.dev</h3>
        <ul className="nav-bar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          className="toggle-btn"
          onClick={(e) => {
            const dropDownMenu = document.querySelector(".dropdown-menu");

            dropDownMenu.classList.toggle("open");

            const isOpen = dropDownMenu.classList.contains("open");

            isOpen
              ? setIconClass("fa-solid fa-xmark")
              : setIconClass("fa-solid fa-bars");
          }}
        >
          <i class={iconClass}></i>
        </button>

        <div className="dropdown-menu">
          <ul className="dropdown-menu-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
