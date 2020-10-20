import React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import PostPreview from "../components/postPreview";
import usePosts from "../hooks/use-posts";
import styles from "./blog.module.css";
import "../components/layout/animation.css";

export default ({ location: { pathname } }) => {
  const posts = usePosts();
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <section className={styles.blogSection}>
          {posts.map((post) => (
            <ul key={post.slug}>
              <li>
                <PostPreview post={post} pathname={pathname} />
                <hr className={styles.thematicBreak} />
              </li>
            </ul>
          ))}
        </section>
      )}
    </TransitionState>
  );
};
