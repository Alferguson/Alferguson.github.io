import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import styles from "./navbar.module.css";

// check path to either show link or not
const checkPath = (p, matchPath) =>
  p === matchPath || p === "/" ? true : false;

const NavBarLabel = ({ upperText, lowerText }) => {
  const path = window.location.pathname;
  return (
    <span className={styles.navBarLabel}>
      <h3
        className={
          path === `/${upperText}/`
            ? styles.greyBigHeader
            : styles.whiteBigHeader
        }>
        {upperText}
      </h3>
      <h6
        className={
          path === `/${upperText}/`
            ? styles.hideSmallHeader
            : styles.showSmallHeader
        }>
        {lowerText.toUpperCase()}
      </h6>
    </span>
  );
};

const NavBar = () => {
  const path = window.location.pathname;
  return (
    <nav className={styles.navBar}>
      <ul>
        <li
          className={
            checkPath(path, "/about/") ? styles.showLink : styles.hideLink
          }>
          <TransitionLink
            entry={{ delay: path === "/about/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            exit={{ length: path === "/about/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            to={path === "/about/" ? "/" : "/about/"}>
            <NavBarLabel upperText="about" lowerText="me" />
          </TransitionLink>
        </li>
        <li
          className={
            checkPath(path, "/blog/") ? styles.showLink : styles.hideLink
          }>
          <TransitionLink
            entry={{ delay: path === "/blog/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            exit={{ length: path === "/blog/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            to={path === "/blog/" ? "/" : "/blog/"}>
            <NavBarLabel upperText="blog" lowerText="posts" />
          </TransitionLink>
        </li>
        <li
          className={
            checkPath(path, "/contact/") ? styles.showLink : styles.hideLink
          }>
          <TransitionLink
            entry={{ delay: path === "/contact/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            exit={{ length: path === "/contact/" ? 0.5 : 0 }} // seconds, has to match layout/animation.css fadeout time
            to={path === "/contact/" ? "/" : "/contact/"}>
            <NavBarLabel upperText="contact" lowerText="me" />
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
