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
  const determineMovement = (
    navPathState,
    title,
    stationaryLinkStyle,
    moveLinkStyle,
    hideLinkStyle
  ) => {
    if (navPathState === title) {
      return moveLinkStyle;
    } else if (navPathState === HOME) {
      return stationaryLinkStyle;
    } else {
      return hideLinkStyle;
    }
  };

  return (
    <nav className={`${styles.navBar} ${centerStyle}`}>
      <ul>
        <li
          className={determineMovement(
            navPath,
            ABOUT,
            styles.aboutStyle,
            styles.moveAboutStyle,
            styles.hideAboutStyle
          )}>
          <TransitionLink
            exit={{
              delay: 0.5
            }}
            to="/about/"
            onClick={navigateAbout}>
            <NavBarLabel upperText="about" lowerText="me" />
          </TransitionLink>
        </li>
        <li
          className={determineMovement(
            navPath,
            BLOG,
            styles.blogStyle,
            styles.moveBlogStyle,
            styles.hideBlogStyle
          )}>
          <TransitionLink
            exit={{
              delay: 0.5
            }}
            to="/blog/"
            onClick={navigateBlog}>
            <NavBarLabel upperText="blog" lowerText="posts" />
          </TransitionLink>
        </li>
        <li
          className={determineMovement(
            navPath,
            CONTACT,
            styles.contactStyle,
            styles.moveContactStyle,
            styles.hideContactStyle
          )}>
          <TransitionLink
            exit={{
              delay: 0.5
            }}
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
