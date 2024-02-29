import "./styles.scss";
import { assetsProject } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export default function Sponsor() {
  return (
    <motion.section
      className="sponsor section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <motion.article
        variants={fadeIn("down", "tween", 0.4, 2.5)}
        className="sponsor__container container grid"
      >
        <img
          src={assetsProject.sponsor.sponsorOneImage.source}
          alt={assetsProject.sponsor.sponsorOneImage.alt}
          className="sponsor__img"
        />
        <img
          src={assetsProject.sponsor.sponsorTwoImage.source}
          alt={assetsProject.sponsor.sponsorTwoImage.alt}
          className="sponsor__img"
        />
        <img
          src={assetsProject.sponsor.sponsorThreeImage.source}
          alt={assetsProject.sponsor.sponsorThreeImage.alt}
          className="sponsor__img"
        />
        <img
          src={assetsProject.sponsor.sponsorFourImage.source}
          alt={assetsProject.sponsor.sponsorFourImage.alt}
          className="sponsor__img"
        />
      </motion.article>
    </motion.section>
  );
}
