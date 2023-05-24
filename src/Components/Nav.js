import "../Styles/Nav.scss";
import { useState } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  function handleBurgerClick() {
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
    <div className="navbar">
      <div className="mobileitems">
        <a
          href="#"
          className={`burger ${isVisible ? "burger-icon open" : ""}`}
          onClick={handleBurgerClick}
        >
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </a>
      </div>
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
              href="#"
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
