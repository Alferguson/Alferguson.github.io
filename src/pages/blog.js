import React from "react";
import Layout from "../components/layout";
import PostPreview from "../components/postPreview";
import usePosts from "../queries/use-posts";

export default () => {
  const posts = usePosts();
  console.log(posts);
  return (
    <Layout>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
