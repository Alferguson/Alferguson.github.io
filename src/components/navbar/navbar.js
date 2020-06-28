import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import styles from "./navbar.module.css";

// check path to either show link or not
const checkPath = (p, matchPath) =>
  p === matchPath || p === "/" ? true : false;

const isBlogPath = (p) => p.match(/\/blog\/./g);

const NavBarLabel = ({ upperText, lowerText, override = null }) => {
  const path = window.location.pathname;
  return (
    <span className={styles.navBarLabel}>
      <h3
        className={
          path === `/${upperText}/` || override
            ? styles.greyBigHeader
            : styles.whiteBigHeader
        }>
        {upperText}
      </h3>
      <h6
        className={
          path === `/${upperText}/` || override
            ? styles.hideSmallHeader
            : styles.showSmallHeader
        }>
        {lowerText.toUpperCase()}
      </h6>
    </span>
  );
};

const NavBar = ({ pathname }) => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li
          className={
            checkPath(pathname, "/about/") ? styles.showLink : styles.hideLink
          }>
          <TransitionLink
            entry={{ delay: pathname === "/about/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            exit={{ length: pathname === "/about/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            to={pathname === "/about/" ? "/" : "/about/"}>
            <NavBarLabel upperText="about" lowerText="me" />
          </TransitionLink>
        </li>
        <li
          className={
            checkPath(pathname, "/blog/") ? styles.showLink : styles.hideLink
          }>
          <TransitionLink
            entry={{ delay: pathname === "/blog/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            exit={{ length: pathname === "/blog/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            to={pathname === "/blog/" ? "/" : "/blog/"}>
            <NavBarLabel upperText="blog" lowerText="posts" />
          </TransitionLink>
        </li>
        <li
          className={
            checkPath(pathname, "/contact/") ? styles.showLink : styles.hideLink
          }>
          <TransitionLink
            entry={{ delay: pathname === "/contact/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            exit={{ length: pathname === "/contact/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            to={pathname === "/contact/" ? "/" : "/contact/"}>
            <NavBarLabel upperText="contact" lowerText="me" />
          </TransitionLink>
        </li>

        {isBlogPath(pathname) && (
          <li className={styles.showLink}>
            <TransitionLink
              entry={{ delay: 0.5 }} // seconds, has to match layout/animation.css fadeout time
              exit={{ length: 0.5 }} // seconds, has to match layout/animation.css fadeout time
              to="/blog/">
              <NavBarLabel upperText="blog" lowerText="posts" override={true} />
            </TransitionLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
