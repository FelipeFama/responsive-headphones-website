import React, { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import "./styles.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          JBL
        </a>
        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
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
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <RiCloseLine />
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
}
