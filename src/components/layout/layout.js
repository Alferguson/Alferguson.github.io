import React, { useState } from "react";
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
  // TODO: Fix if user refreshes on any of the pages as state resets
  const [navPath, setNavPath] = useState(HOME);

  const navigateHome = () => setNavPath(HOME);
  const navigateAbout = () => setNavPath(ABOUT);
  const navigateBlog = () => setNavPath(BLOG);
  const navigateContact = () => setNavPath(CONTACT);

  const navigateDispatchers = {
    navigateHome,
    navigateAbout,
    navigateBlog,
    navigateContact
  };
  console.log("navPath is", navPath);

  return (
    <>
      <div className={styles.layout}>
        <TransitionPortal level="top">
          {/* Hide the header on every page except the home page (this is for the first last name header) */}
          {navPath !== HOME && <NavHeader pathname={location.pathname} />}
        </TransitionPortal>

        <TransitionPortal level="center">
          {/* Show the navbar only on the home page and home page's transition */}
          {path === "/" && (
            <div className={styles.centerNav}>
              <NavBar
                pathname={location.pathname}
                navPath={navPath}
                navigateDispatchers={navigateDispatchers}
              />
            </div>
          )}
        </TransitionPortal>

        {/* header fades in on initial load for home page and fades out for other page transitions */}
        <header
          className={navPath === HOME ? "fadeIn" : "fadeOut"}
          style={{ opacity: navPath === HOME ? 1 : 0 }}>
          <div className={styles.headerText}>
            <h3>John (Alex)ander Ferguson</h3>
            {/* TODO: add animation of different titles here */}
            <h6>full stack web developer</h6>
          </div>
          <SocialMediaIcons />
        </header>

        {/* TransitionState not included here to:
          1. allow customization for each page
          2. since layout is on index page (home page), a TransitionLink wasn't clicked meaning the state wasn't passed to this page in time
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
