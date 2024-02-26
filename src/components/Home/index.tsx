import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiPlayCircle,
} from "react-icons/bi";
import { assetsProject } from "../../utils/data";
import "./styles.scss";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <article className="home__content">
          <img
            src={assetsProject.home.img.source}
            alt={assetsProject.home.img.alt}
            className="home__img"
          />
          <h1 className="home__title">
            <span>J</span>
            <span>B</span>
            <span>L</span>
          </h1>
          <figure className="home__tooltip">
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="home__tooltip-img"
            />
            <span className="home__tooltip-text">$150</span>
          </figure>
        </article>
        <a href="#" className="home__button button">
          Buy Now <BiPlayCircle />
        </a>
        <article className="home__social">
          <span className="home__social-text">Follow us</span>
          <aside className="home__social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="home__social-link"
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
          </aside>
        </article>
      </div>
    </section>
  );
}
