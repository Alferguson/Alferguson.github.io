import React from "react";
import styles from "./layout.module.css";
import NavBar from "../navbar";
import SocialMediaIcons from "../socialMediaIcons";
import { TransitionPortal } from "gatsby-plugin-transition-link";
import NavHeader from "../navHeader";
import "./animation.css";

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const Layout = ({ children, path, location, title }) => {
  return (
    <>
      <div className={styles.layout}>
        <TransitionPortal level="top">
          {location.pathname !== "/" && (
            <NavHeader pathname={location.pathname} />
          )}
        </TransitionPortal>

        <TransitionPortal level="center">
          {location.pathname === "/" && (
            <div className={styles.centerNav}>
              <NavBar pathname={location.pathname} />
              {/* <h1>okat</h1> */}
            </div>
          )}
        </TransitionPortal>

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
    </>
  );
};

export default Layout;
