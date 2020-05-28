import React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import PostPreview from "../components/postPreview";
import usePosts from "../queries/use-posts";
import "../components/layout/animation.css";

export default () => {
  const posts = usePosts();
  console.log(posts);
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <section
          className={`
             ${transitionStatus === "entering" ? "fadeIn" : ""} 
             ${transitionStatus === "exiting" ? "fadeOut" : ""}
           `}>
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </section>
      )}
    </TransitionState>
  );
};
