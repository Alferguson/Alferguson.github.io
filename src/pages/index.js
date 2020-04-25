import React from "react";
import Layout from "../components/layout";
import usePosts from "../queries/use-posts";

export default () => {
  const posts = usePosts();
  console.log(posts);
  return (
    <Layout>
      <h2>Read my blog</h2>
      {/* {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))} */}
    </Layout>
  );
};
