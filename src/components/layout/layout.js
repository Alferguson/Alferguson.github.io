import React, { useState, useEffect } from "react";
import styles from "./layout.module.css";
import NavBar from "../navbar";
import SocialMediaIcons from "../socialMediaIcons";
import { TransitionPortal } from "gatsby-plugin-transition-link";
import NavHeader from "../navHeader";
import { HOME, ABOUT, BLOG, CONTACT } from "../../utils/constants";
import "./animation.css";

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const Layout = ({ children, path, location, title }) => {
  console.log(path);

  return (
    <>
      <div className={styles.layout}>
        {/* header fades in on initial load for home page and fades out for other page transitions */}
        <header
          className={path === HOME ? "headerFadeIn" : "headerFadeOut"}
          style={{ opacity: path === HOME ? 1 : 0 }}>
          <div className={styles.headerText}>
            <h3>John (Alex)ander Ferguson</h3>
            {/* TODO: add animation of different titles here */}
            <h6>full stack web developer</h6>
          </div>
          <SocialMediaIcons />
        </header>

        <TransitionPortal level="center">
          <NavBar centerStyle={styles.centerNav} pathname={location.pathname} />
        </TransitionPortal>

        {/* transition portal should be included here to allow fadeOut transitions from navigating backwards */}
        <main
          className={`${path !== HOME && "fadeIn"}`}
          style={{ opacity: path !== HOME ? 1 : 0 }}>
          {children}
        </main>

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
