import "./styles.scss";
import { assetsProject } from "../../utils/data";

export default function Sponsor() {
  return (
    <section className="sponsor section">
      <article className="sponsor__container container grid">
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
      </article>
    </section>
  );
}
