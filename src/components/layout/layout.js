import React from "react";
import styles from "./layout.module.css";
import NavBar from "../navbar";
import OrangeLine from "../orangeLine";
import SocialMediaIcons from "../socialMediaIcons";
import { TransitionPortal } from "gatsby-plugin-transition-link";
import "./animation.css";

const determineYMovement = (path) => {
  switch (path) {
    case "/":
      return styles.initialPosition;
    case "/about/":
      return styles.aboutPosition;
    case "/blog/":
      return styles.blogPosition;
    case "/contact/":
      return styles.contactPosition;
    default:
      if (path.match(/\/blog\/./g)) {
        return styles.blogPostPosition;
      }
      console.error(`Path does not exist, Path=${path}`);
      return styles.initialPosition;
  }
};

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const Layout = ({ children, path, location, title }) => {
  console.log(path.match(/\/blog\/./g));
  return (
    <>
      <div className={styles.layout}>
        {/* header fades in on initial load for index page and fades out for other page transitions */}
        <header
          className={path === "/" ? "fadeIn" : "fadeOut"}
          style={{ opacity: path === "/" ? 1 : 0 }}>
          <div className={styles.headerText}>
            <h3>John (Alex)ander Ferguson</h3>
            {/* TODO: add animation of different titles here */}
            <h6>full stack web developer</h6>
          </div>
          <SocialMediaIcons />
        </header>
        {/* TransitionState not included here to:
          1. allow customization for each page
          2. since layout is on index page (landing page), a TransitionLink wasn't clicked meaning the state wasn't passed to this page in time
        */}
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <TransitionPortal level="top">
        <div
          className={`${
            path === "/" || path.match(/\/blog\/./g)
              ? styles.centerNav
              : styles.topLeftNav
          }
            ${determineYMovement(path)}
            `}>
          <NavBar pathname={location.pathname} />
        </div>
      </TransitionPortal>
    </>
  );
};

export default Layout;
