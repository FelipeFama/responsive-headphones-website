import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { RiPlayCircleFill } from "react-icons/ri";
import { assetsProject } from "../../utils/data";
import "./styles.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export default function Home() {
  return (
    <motion.section
      className="home section"
      id="home"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="home__container container grid">
        <article className="home__content">
          <img
            src={assetsProject.home.img.source}
            alt={assetsProject.home.img.alt}
            className="home__img"
          />
          <h1 className="home__title">
            <motion.span variants={fadeIn("right", "tween", 0.4, 2.5)}>
              J
            </motion.span>
            <span>B</span>
            <motion.span variants={fadeIn("left", "tween", 0.4, 2.5)}>
              L
            </motion.span>
          </h1>
          <motion.figure
            variants={fadeIn("up", "tween", 0.4, 2.5)}
            className="home__tooltip"
          >
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="home__tooltip-img"
            />
            <span className="home__tooltip-text">$150</span>
          </motion.figure>
        </article>
        <motion.a
          variants={fadeIn("up", "tween", 0.4, 2.5)}
          href="#"
          className="home__button button"
        >
          Buy Now <RiPlayCircleFill />
        </motion.a>
        <motion.article
          variants={fadeIn("down", "tween", 0.4, 2.5)}
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
    </motion.section>
  );
}
