import { RiSendPlaneFill } from "react-icons/ri";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import "./styles.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
      variants={fadeIn("down", "tween", 0.4, 2.5)}
    >
      <div className="footer__container container grid">
        <article>
          <a href="#" className="footer__logo">
            JBL
          </a>
        </article>
        <article className="footer__data grid">
          <aside>
            <h3 className="footer__title">Products</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Headphones
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Earphones
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Earbuds
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Accessories
                </a>
              </li>
            </ul>
          </aside>
          <aside>
            <h3 className="footer__title">Support</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Product Help
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Provides
                </a>
              </li>
            </ul>
          </aside>
          <aside className="footer__group">
            <form action="" className="footer__form">
              <input
                type="email"
                placeholder="Email"
                className="footer__input"
              />
              <button className="footer__button button">
                Subscribe <RiSendPlaneFill />
              </button>
            </form>
            <div className="footer__social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="footer__social-link"
                rel="noreferrer"
              >
                <BiLogoFacebookCircle />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="footer__social-link"
                rel="noreferrer"
              >
                <BiLogoInstagramAlt />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="footer__social-link"
                rel="noreferrer"
              >
                <BiLogoLinkedinSquare />
              </a>
            </div>
          </aside>
        </article>
      </div>

      <span className="footer__copy">
        &#169; All Rights Reserved By Yeison Serrano
      </span>
    </motion.footer>
  );
}
