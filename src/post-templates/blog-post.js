import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

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
  { data: { mdx: post } } // desturing to aliasing here
) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>Posted by author</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <p>Post body goes here</p>
  </Layout>
);

export default PostTemplate;
