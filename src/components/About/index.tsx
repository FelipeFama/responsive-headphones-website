import { assetsProject } from "../../utils/data";
import { BiSolidInfoCircle } from "react-icons/bi";
import "./styles.scss";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <motion.article
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 2.5, delay: 0.4 }}
          className="about__data"
        >
          <aside className="section__title">MORE ABOUT US</aside>
          <p className="about__description">
            Enjoy award-winning JBL sound with wireless listening freedom and a
            sleek, streamlined design with comfortable cushioned earcups that
            deliver premium playback for the user.
          </p>
          <a href="#" className="button">
            Know More <BiSolidInfoCircle />
          </a>
        </motion.article>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: -1 }}
          transition={{ duration: 2.5, delay: 0.4 }}
          src={assetsProject.about.img.source}
          alt={assetsProject.about.img.alt}
          className="about__img"
        />
      </div>
    </section>
  );
}
