import React, { useState } from "react";

function Nav() {
  const [iconClass, setIconClass] = useState("fa-solid fa-bars-staggered");

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
            <a href="#projects">Portfolio</a>
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

            // scroll behavior
            dropDownMenu.classList.contains("open")
              ? (document.body.style.overflowY = "hidden")
              : (document.body.style.overflowY = "");

            const isOpen = dropDownMenu.classList.contains("open");

            // icon
            isOpen
              ? setIconClass("fa-solid fa-xmark")
              : setIconClass("fa-solid fa-bars-staggered");
          }}
        >
          <i class={iconClass}></i>
        </button>

        {/* dropdown menu */}
        <div className="dropdown-menu">
          <ul
            className="dropdown-menu-links"
            onClick={() => {
              const dropDownMenu = document.querySelector(".dropdown-menu");
              dropDownMenu.classList.toggle("open");
              dropDownMenu.classList.toggle("closed");

              const isClosed = dropDownMenu.classList.contains("closed");

              // icon
              isClosed
                ? setIconClass("fa-solid fa-bars-staggered")
                : setIconClass("fa-solid fa-xmark");

              dropDownMenu.classList.toggle("closed");
              document.body.style.overflowY = "";
            }}
          >
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
