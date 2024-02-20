import React from "react";
import "./styles.scss";

export default function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          JBL
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#favorite" className="nav__link active-link">
                Favorite
              </a>
            </li>
            <li className="nav__item">
              <a href="#model" className="nav__link active-link">
                Models
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
