import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import ZuneSquare from "../zuneSquare";
import styles from "./postPreview.module.css";

const transitionExit = 0;
const transitionEntry = 0.15;

const PostPreview = ({ post, pathname }) => {
  return (
    <article>
      <h3>
        <TransitionLink
          exit={{ length: transitionExit }}
          entry={{ delay: transitionEntry }}
          className={styles.headerLink}
          to={`/blog/${post.slug}`}>
          {post.title}
        </TransitionLink>
      </h3>
      <p className={styles.bodyContainer}>{post.excerpt}</p>
      <TransitionLink
        exit={{ length: transitionExit }}
        entry={{ delay: transitionEntry }}
        to={`/blog/${post.slug}`}>
        <ZuneSquare>read this post &rarr;</ZuneSquare>
      </TransitionLink>
    </article>
  );
};

export default PostPreview;
