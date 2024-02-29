/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { assetsProject } from "../../utils/data";
import "./styles.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export default function Favorite() {
  useEffect(() => {
    window.onload = () => {
      const swiperFavorite = new (window as any).Swiper(".favorite__swiper", {
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
    <motion.section
      className="favorite section"
      id="favorite"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <h2 className="section__title">CHOOSE YOUR FAVORITE</h2>
      <motion.article
        variants={fadeIn("down", "tween", 0.4, 2.5)}
        className="favorite__container"
      >
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
      </motion.article>
    </motion.section>
  );
}
