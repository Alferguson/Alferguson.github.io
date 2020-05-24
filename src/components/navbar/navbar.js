import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "./navbar.module.css";

// check path to either show link or not
const checkPath = (p, matchPath) =>
  p === matchPath || p === "/" ? true : false;

const NavBarLabel = ({ upperText, lowerText }) => {
  const path = window.location.pathname;
  return (
    <span className={styles.navBarLabel}>
      <h3>{upperText}</h3>
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
          <AniLink fade to={path === "/about/" ? "/" : "/about/"}>
            <NavBarLabel upperText="about" lowerText="me" />
          </AniLink>
        </li>
        <li
          className={
            checkPath(path, "/blog/") ? styles.showLink : styles.hideLink
          }>
          <AniLink fade to={path === "/blog/" ? "/" : "/blog/"}>
            <NavBarLabel upperText="blog" lowerText="posts" />
          </AniLink>
        </li>
        <li
          className={
            checkPath(path, "/contact/") ? styles.showLink : styles.hideLink
          }>
          <AniLink fade to={path === "/contact/" ? "/" : "/contact/"}>
            <NavBarLabel upperText="contact" lowerText="me" />
          </AniLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
