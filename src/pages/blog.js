import React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import PostPreview from "../components/postPreview";
import usePosts from "../queries/use-posts";
import styles from "./blog.module.css";
import "../components/layout/animation.css";

export default ({ location: { pathname } }) => {
  const posts = usePosts();
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <section
          className={`
             ${styles.blogSection} 
             ${transitionStatus === "entering" ? "fadeIn" : ""} 
             ${transitionStatus === "exiting" ? "fadeOut" : ""}
           `}>
          {posts.map((post) => (
            <>
              <PostPreview key={post.slug} post={post} pathname={pathname} />
              <hr className={styles.thematicBreak} />
            </>
          ))}
        </section>
      )}
    </TransitionState>
  );
};
