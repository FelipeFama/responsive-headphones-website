import "./styles.scss";
import { assetsProject } from "../../utils/data";
import { RiPlayCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export default function Model() {
  return (
    <motion.section
      className="model section"
      id="model"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <h2 className="section__title">MODEL SPECIFICATIONS</h2>
      <div className="model__container container grid">
        <article className="model__content">
          <img
            src={assetsProject.model.modelImage.source}
            alt={assetsProject.model.modelImage.alt}
            className="model__img"
          />
          <motion.aside
            variants={fadeIn("right", "tween", 0.4, 2.5)}
            className="model__tooltip model__tooltip-1"
          >
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Best Comfort</span>
          </motion.aside>
          <motion.aside
            variants={fadeIn("left", "tween", 0.4, 2.5)}
            className="model__tooltip model__tooltip-2"
          >
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Easy Adjustment</span>
          </motion.aside>
          <motion.aside
            variants={fadeIn("right", "tween", 0.4, 2.5)}
            className="model__tooltip model__tooltip-3"
          >
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Fast Charge</span>
          </motion.aside>
          <motion.aside
            variants={fadeIn("left", "tween", 0.4, 2.5)}
            className="model__tooltip model__tooltip-4"
          >
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Custom Audio</span>
          </motion.aside>
        </article>
        <motion.a
          variants={fadeIn("up", "tween", 0.4, 2.5)}
          href="#"
          className="model__button button"
        >
          Buy Now <RiPlayCircleFill />
        </motion.a>
      </div>
    </motion.section>
  );
}
