import { useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";
import "./styles.scss";

export default function ScrollUpButton() {
  const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    window.scrollY >= 350
      ? scrollUpBtn?.classList.add("show-scroll")
      : scrollUpBtn?.classList.remove("show-scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  return (
    <>
      <a href="#home" className="scrollup" id="scroll-up">
        <BiChevronUp />
      </a>
    </>
  );
}
