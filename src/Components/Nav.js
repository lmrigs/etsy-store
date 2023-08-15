import "../Styles/Nav.scss";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSolidNav, setSolidNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  function changeBackground() {
    if (window.scrollY >= 600) {
      setSolidNav(true);
    } else {
      setSolidNav(false);
    }
  }

  function handleBurgerClick(e) {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  }

  function handleListClick() {
    setIsVisible(false);
  }

  function handleMouseEnter(e) {
    e.target.classList.add("hovered");
  }

  function handleMouseLeave(e) {
    e.target.classList.remove("hovered");
  }

  return (
    <div className={`navbar ${isSolidNav ? "active" : ""}`}>
      <a
        href="#"
        className={`burger-icon ${isVisible ? " open" : ""}`}
        onClick={handleBurgerClick}
      >
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </a>
      <div className={`navbar-links ${isVisible ? "visible" : ""}`}>
        <ul className="menu-items">
          <li onClick={handleListClick}>
            <a
              href="#products"
              className="menu-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Products
            </a>
          </li>
          <li onClick={handleListClick}>
            <a
              href="#about"
              className="menu-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About
            </a>
          </li>
          <li onClick={handleListClick}>
            <a
              href="#contact"
              className="menu-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
