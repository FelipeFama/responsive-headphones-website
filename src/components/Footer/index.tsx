import React from "react";
import "./styles.scss";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="footer">
      <article>
        <a href="" className="footer__logo">
          JBL
        </a>
      </article>
      <article className="footer__data grid">
        <aside>
          <h3 className="footer__title">Products</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Headphones
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Earphones
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Earbuds
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Accessories
              </a>
            </li>
          </ul>
        </aside>
        <aside>
          <h3 className="footer__title">Support</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Product Help
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Updates
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Provides
              </a>
            </li>
          </ul>
        </aside>
        <aside className="footer__group">
          <form action="" className="footer__form">
            <input type="email" placeholder="Email" className="footer__input" />
            <button className="footer__button button">
              Subscribe <RiSendPlaneFill />
            </button>
          </form>
          <div className="footer__social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <BiLogoFacebookCircle />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <BiLogoInstagramAlt />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <BiLogoLinkedinSquare />
            </a>
          </div>
        </aside>
      </article>
      <span className="footer__copy">
        &#169; All Rights Reserved By Yeison Serrano
      </span>
    </footer>
  );
}
