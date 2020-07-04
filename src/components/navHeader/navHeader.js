import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import styles from "./navHeader.module.css";

const NavHeader = ({ pathname, link = "/" }) => {
  // replace / in pathname
  const text = pathname.replace(/\//g, "");
  return (
    <TransitionLink
      entry={{ delay: 0.5 }} // seconds, has to match layout/animation.css fadeout time
      exit={{ length: 0.5 }} // seconds, has to match layout/animation.css fadeout time
      to={link}
      className={styles.navHeader}>
      <h3>{text}</h3>
    </TransitionLink>
  );
};

export default NavHeader;
