import React from "react";

import "./styles.scss";
import { assetsProject } from "../../utils/data";

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

        <article className="home__social"></article>
      </div>
    </section>
  );
}
