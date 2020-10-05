import React, { useState } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { Link } from "gatsby";
import { HOME, ABOUT, BLOG, CONTACT } from "../../utils/constants";
import styles from "./navbar.module.css";

const NavBarLabel = ({ upperText, lowerText }) => (
  <div className={styles.navBarLabel}>
    <h3 className={styles.whiteBigHeader}>{upperText}</h3>
    <h6 className={styles.greySmallHeader}>{lowerText.toUpperCase()}</h6>
  </div>
);
const determineMovement = (
  path,
  title,
  stationaryLinkStyle,
  moveLinkStyle,
  hideLinkStyle
) => {
  if (path.includes(title)) {
    return moveLinkStyle;
  } else if (path === HOME) {
    return stationaryLinkStyle;
  } else {
    return hideLinkStyle;
  }
};

// TODO: Move state up to parent Layout component so all components can see what nav link was clicked
const NavBar = ({ centerStyle, pathname }) => {
  return (
    <nav className={`${styles.navBar} ${centerStyle}`}>
      <ul>
        <li
          className={determineMovement(
            pathname,
            ABOUT,
            styles.aboutStyle,
            styles.moveAboutStyle,
            styles.hideAboutStyle
          )}>
          <Link to={pathname.includes(ABOUT) ? HOME : ABOUT}>
            <NavBarLabel upperText="about" lowerText="me" />
          </Link>
        </li>
        <li
          className={determineMovement(
            pathname,
            BLOG,
            styles.blogStyle,
            styles.moveBlogStyle,
            styles.hideBlogStyle
          )}>
          <Link to={pathname.includes(BLOG) ? HOME : BLOG}>
            <NavBarLabel upperText="blog" lowerText="posts" />
          </Link>
        </li>
        <li
          className={determineMovement(
            pathname,
            CONTACT,
            styles.contactStyle,
            styles.moveContactStyle,
            styles.hideContactStyle
          )}>
          <Link to={pathname.includes(CONTACT) ? HOME : CONTACT}>
            <NavBarLabel upperText="contact" lowerText="me" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
