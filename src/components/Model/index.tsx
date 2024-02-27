import "./styles.scss";
import { assetsProject } from "../../utils/data";
import { RiPlayCircleFill } from "react-icons/ri";

export default function Model() {
  return (
    <section className="model section" id="model">
      <h2 className="section__title">MODEL SPECIFICATIONS</h2>
      <div className="model__container container grid">
        <article className="model__content">
          <img
            src={assetsProject.model.modelImage.source}
            alt={assetsProject.model.modelImage.alt}
            className="model__img"
          />
          <aside className="model__tooltip model__tooltip-1">
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Best Comfort</span>
          </aside>
          <aside className="model__tooltip model__tooltip-2">
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Easy Adjustment</span>
          </aside>
          <aside className="model__tooltip model__tooltip-3">
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Fast Charge</span>
          </aside>
          <aside className="model__tooltip model__tooltip-4">
            <img
              src={assetsProject.home.tooltip.tooltipImage.source}
              alt={assetsProject.home.tooltip.tooltipImage.alt}
              className="model__tooltip-img"
            />
            <span className="model__tooltip-text">Custom Audio</span>
          </aside>
        </article>
        <a href="#" className="model__button button">
          Buy Now <RiPlayCircleFill />
        </a>
      </div>
    </section>
  );
}
