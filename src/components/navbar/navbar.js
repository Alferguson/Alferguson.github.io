import React, { useState } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { HOME, ABOUT, BLOG, CONTACT } from "../../utils/constants";
import styles from "./navbar.module.css";

const NavBarLabel = ({ upperText, lowerText }) => (
  <div className={styles.navBarLabel}>
    <h3 className={styles.whiteBigHeader}>{upperText}</h3>
    <h6 className={styles.greySmallHeader}>{lowerText.toUpperCase()}</h6>
  </div>
);

// TODO: Move state up to parent Layout component so all components can see what nav link was clicked
const NavBar = ({
  centerStyle,
  pathname,
  navPath,
  navigateDispatchers: {
    navigateHome,
    navigateAbout,
    navigateBlog,
    navigateContact
  }
}) => {
  const determineMovement = (navPathState, title) => {
    if (navPathState === title) {
      return styles.moveLink;
    } else if (navPathState === HOME) {
      return styles.link;
    } else {
      return styles.hideLink;
    }
  };
  return (
    <nav className={`${styles.navBar} ${centerStyle}`}>
      <ul>
        <li className={determineMovement(navPath, ABOUT)}>
          <TransitionLink
            exit={{
              delay: 100.75
            }}
            entry={{
              length: 0.75
            }} // seconds, has to match layout/animation.css fadeout time
            to="/about/"
            onClick={navigateAbout}>
            <NavBarLabel upperText="about" lowerText="me" />
          </TransitionLink>
        </li>
        <li className={determineMovement(navPath, BLOG)}>
          <TransitionLink
            exit={{ length: 0 }} // seconds, has to match layout/animation.css fadeout time
            entry={{ delay: 0 }} // seconds, has to match layout/animation.css fadeout time
            to="/blog/"
            onClick={navigateBlog}>
            <NavBarLabel upperText="blog" lowerText="posts" />
          </TransitionLink>
        </li>
        <li className={determineMovement(navPath, CONTACT)}>
          <TransitionLink
            exit={{ length: 0 }} // seconds, has to match layout/animation.css fadeout time
            entry={{ delay: 0 }} // seconds, has to match layout/animation.css fadeout time
            to="/contact/"
            onClick={navigateContact}>
            <NavBarLabel upperText="contact" lowerText="me" />
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
