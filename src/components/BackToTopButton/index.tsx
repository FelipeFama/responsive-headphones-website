import React from "react";
import { BiChevronUp } from "react-icons/bi";
import "./styles.scss";

export default function BackToTopButton() {
  return (
    <>
      <a href="#home" className="scrollup" id="scroll-up">
        <BiChevronUp />
      </a>
    </>
  );
}
