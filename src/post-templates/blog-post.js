import React from "react";
import { graphql } from "gatsby";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ZuneSquare from "../components/zuneSquare";
import styles from "./blog-post.module.css";
import "../components/layout/animation.css";

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

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = (
  { data: { mdx: post } } // destructuring to aliasing here
) => (
  <TransitionState>
    {({ transitionStatus }) => (
      <article
        className={`
      ${styles.blogPost}
      ${transitionStatus === "entering" ? "fadeIn" : ""} 
      ${transitionStatus === "exiting" ? "fadeOut" : ""}
      `}>
        <h1>{post.frontmatter.title}</h1>
        <p>Posted by author {post.frontmatter.author}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <TransitionLink
          exit={{ length: 0 }}
          entry={{ delay: 0.15 }}
          to="/blog/">
          <ZuneSquare
            style={{ marginTop: "40px", paddingRight: "20px", float: "left" }}>
            &larr; back to blog
          </ZuneSquare>
        </TransitionLink>
      </article>
    )}

    {/* <li className={styles.navBarLink}>
      <TransitionLink
        entry={{ delay: 0.5 }} // seconds, has to match layout/animation.css fadeout time
        exit={{ length: 0.5 }} // seconds, has to match layout/animation.css fadeout time
        to="/blog/">
        <NavBarLabel upperText={post.frontmatter.title} lowerText="" />
      </TransitionLink>
    </li> */}
  </TransitionState>
);

export default PostTemplate;
