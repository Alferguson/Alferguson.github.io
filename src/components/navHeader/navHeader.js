import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import styles from "./navHeader.module.css";

const NavHeader = ({ pathname, navigateHome, link = "/" }) => {
  // replace / in pathname
  const text = pathname.replace(/\//g, "");
  return (
    <TransitionLink
      exit={{ delay: 0.75 }} // seconds, has to match layout/animation.css fadeout time
      to={link}
      className={styles.navHeader}
      onClick={navigateHome}>
      <h3>{text}</h3>
    </TransitionLink>
  );
};

export default NavHeader;
