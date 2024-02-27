import { useEffect } from "react";
import { assetsProject } from "../../utils/data";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./styles.scss";

export default function Favorite() {
  useEffect(() => {
    window.onload = () => {
      const swiperFavorite = new Swiper(".favorite__swiper", {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        grabCursor: true,
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
        },
      });
      return () => {
        swiperFavorite.destroy();
      };
    };
  }, []);

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
