import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { RiPlayCircleFill } from "react-icons/ri";
import { assetsProject } from "../../utils/data";
import "./styles.scss";
import { motion } from "framer-motion";

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
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ duration: 2.5, delay: 0.4 }}
            >
              J
            </motion.span>
            <span>B</span>
            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: -10 }}
              transition={{ duration: 2.5, delay: 0.4 }}
            >
              L
            </motion.span>
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
        <motion.a
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 2.5, delay: 0.4 }}
          href="#"
          className="home__button button"
        >
          Buy Now <RiPlayCircleFill />
        </motion.a>
        <motion.article
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 60 }}
          transition={{ duration: 2.5, delay: 0.4 }}
          className="home__social"
        >
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
        </motion.article>
      </div>
    </section>
  );
}
