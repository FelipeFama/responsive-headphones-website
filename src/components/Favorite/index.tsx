import React from "react";

import "./styles.scss";
import { assetsProject } from "../../utils/data";

export default function Favorite() {
  return (
    <section className="favorite section" id="favorite">
      <h2 className="section__title">CHOOSE YOUR FAVORITE</h2>
      <article className="favorite__container">
        <div className="favorite__swiper swiper">
          <aside className="swiper-wrapper">
            <article className="favorite__article swiper-slide">
              <img
                src={assetsProject.favorite.favoriteOneImage.source}
                alt={assetsProject.favorite.favoriteOneImage.alt}
                className="favorite__img"
              />
              <span className="favorite__model">Black Model</span>
            </article>
            <article className="favorite__article swiper-slide">
              <img
                src={assetsProject.favorite.favoriteTwoImage.source}
                alt={assetsProject.favorite.favoriteTwoImage.alt}
                className="favorite__img"
              />
              <span className="favorite__model">White Model</span>
            </article>
            <article className="favorite__article swiper-slide">
              <img
                src={assetsProject.favorite.favoriteThreeImage.source}
                alt={assetsProject.favorite.favoriteThreeImage.alt}
                className="favorite__img"
              />
              <span className="favorite__model">Red Model</span>
            </article>
            <article className="favorite__article swiper-slide">
              <img
                src={assetsProject.favorite.favoriteFourImage.source}
                alt={assetsProject.favorite.favoriteFourImage.alt}
                className="favorite__img"
              />
              <span className="favorite__model">Teal Model</span>
            </article>
          </aside>
        </div>
      </article>
    </section>
  );
}
