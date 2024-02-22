import React from "react";
import "./styles.scss";
import { BiSolidInfoCircle } from "react-icons/bi";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <article className="about__data">
          <div className="section__title">MORE ABOUT US</div>
          <p className="about__description">
            Enjoy award-winning JBL sound with wireless listening freedom and a
            sleek, streamlined design with comfortable cushioned earcups that
            deliver premium playback for the user.
          </p>
          <a href="#" className="button">
            Know More <BiSolidInfoCircle />
          </a>
        </article>
      </div>
    </section>
  );
}
