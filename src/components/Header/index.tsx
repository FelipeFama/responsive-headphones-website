import React from "react";
import "./styles.scss";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

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
          {/* Close button */}
          <div className="nav__close" id="nav-close">
            <RiCloseLine />
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle">
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
}
