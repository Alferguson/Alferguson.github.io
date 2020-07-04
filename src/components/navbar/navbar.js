import React, { useState } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import styles from "./navbar.module.css";

const NavBarLabel = ({ upperText, lowerText }) => (
  <span className={styles.navBarLabel}>
    <h3 className={styles.whiteBigHeader}>{upperText}</h3>
    <h6 className={styles.greySmallHeader}>{lowerText.toUpperCase()}</h6>
  </span>
);

const NavBar = ({ pathname }) => {
  const [linkMove, setLinkMove] = useState(false);
  return (
    <nav className={styles.navBar}>
      <ul>
        <li className={linkMove ? styles.moveLink : styles.link}>
          <TransitionLink
            exit={{
              delay: 100
            }}
            entry={{
              length: 0
              // delay: 20
            }} // seconds, has to match layout/animation.css fadeout time
            to="/about/"
            onClick={() => setLinkMove(true)}>
            <NavBarLabel upperText="about" lowerText="me" />
          </TransitionLink>
        </li>
        <li className={styles.link}>
          <TransitionLink
            exit={{ length: 0 }} // seconds, has to match layout/animation.css fadeout time
            entry={{ delay: 0 }} // seconds, has to match layout/animation.css fadeout time
            to="/blog/">
            <NavBarLabel upperText="blog" lowerText="posts" />
          </TransitionLink>
        </li>
        <li className={styles.link}>
          <TransitionLink
            exit={{ length: 0 }} // seconds, has to match layout/animation.css fadeout time
            entry={{ delay: 0 }} // seconds, has to match layout/animation.css fadeout time
            to="/contact/">
            <NavBarLabel upperText="contact" lowerText="me" />
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
