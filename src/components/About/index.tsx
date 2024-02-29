import { assetsProject } from "../../utils/data";
import { BiSolidInfoCircle } from "react-icons/bi";
import "./styles.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export default function About() {
  return (
    <motion.section
      className="about section"
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="about__container container grid">
        <motion.article
          variants={fadeIn("right", "tween", 0.4, 2.5)}
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
          variants={fadeIn("left", "tween", 0.4, 2.5)}
          src={assetsProject.about.img.source}
          alt={assetsProject.about.img.alt}
          className="about__img"
        />
      </div>
    </motion.section>
  );
}
