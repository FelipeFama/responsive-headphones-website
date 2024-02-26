import React from "react";
import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <article>
        <a href="" className="footer__logo">
          JBL
        </a>
      </article>
      <article className="footer__data grid">
        <aside>
          <h3 className="footer__title">Products</h3>
          <ul className="footer__links">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </aside>
        <aside></aside>
        <aside></aside>
      </article>
      <span className="footer__copy">
        &#169; All Rights Reserved By Yeison Serrano
      </span>
    </footer>
  );
}
